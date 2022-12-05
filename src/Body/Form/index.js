import {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import { getSources } from '../../Services/apiServices'
import { useEffect } from 'react';

import {setErrorMessage, setSearchParams} from '../../Services/stateService';
import 'react-datepicker/dist/react-datepicker.css';
import {useDispatch, useSelector} from 'react-redux';


function FromComponent({show, handleClose, searchProps, }) {
    const [startDateFrom, setStartDateFrom] = useState(new Date());
    const [startDateTo, setStartDateTo] = useState(new Date());

    const [source,setSources] = useState([]);

    const dateFormat = "dd.MM.yyyy";
    const pageSize = useSelector((state) => state.searchParams.pageSize);
    const dispatch = useDispatch();
    const languages = [
        {label: 'English', code: 'en'},
        {label: 'Russian', code: 'ru'},
        {label: 'Germany', code: 'de'},
        {label: 'Franch', code: 'fr'},
    ];

    function upperText(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    async function handleSubmit(event) {
        console.log(event.target.source.value)
        event.preventDefault();
        const data = {
            q: event.target.q.value,
            from: moment(startDateFrom).format("YYYY-MM-DDT00:00:00.000"),
            to: moment(startDateTo).format("YYYY-MM-DDT23:59:59.999"),
            language: event.target.language.value,
            searchIn: [...event.target.searchIn].filter(input => input.checked).map(input => input.value).join(','),
            pageSize,
            page: 1,
            source: event.target.source.value
            // source: event.target.source.value
        };


        if (moment(data.from).isAfter(data.to)) {
            dispatch(setErrorMessage("Wrong data from"));
            return;
        }


        dispatch(setSearchParams(data));
        handleClose();
    }
    useEffect(() => {  
        (async function () {
          try {
            const response = await getSources();
            const responseData = await response.json();
            if (responseData.status === 'error') {
              throw responseData;
            }
            setSources(responseData.sources);
          } catch (error) {
            dispatch(setErrorMessage(error.message));
          }
        })();
      }, [setSources, dispatch]);

    return (

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search News</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Keywords</Form.Label>
                        <Form.Control
                            type="text"
                            name="q"
                            placeholder="Enter keywords or phrases"
                            defaultValue={searchProps.q}/>

                        <Form.Text className="text-muted">
                            Advanced search is supported.
                        </Form.Text>

                        {/* <Form.Select name="source" aria-label="Default select example" defaultValue={searchProps.source}>
                            {sources.map((value) => (
                                <option key={value.id} value={value.id}>{value.name}</option>
                            ))}
                        </Form.Select> */}

                    </Form.Group>
                    {['title', 'description', 'content'].map((titleName) => (
                        <div key={`${titleName}`} className="mb-3">
                            <Form.Check
                                label={upperText(titleName)}
                                name="searchIn"
                                type="checkbox"
                                value={titleName}
                                id={`inline-${titleName}-1`}
                                defaultChecked={searchProps.searchIn.includes(titleName)}
                            />
                        </div>
                    ))}
                    <Form.Group className="mb-3">
                        <Form.Label>From-to</Form.Label>
                        <InputGroup className="mb-3 d-flex flex-nowrap">

                            <InputGroup.Text></InputGroup.Text>
                            <DatePicker
                                selected={startDateFrom}
                                onChange={(date) => setStartDateFrom(date)}
                                name="from"
                                dateFormat={dateFormat}
                            />
                            <DatePicker
                                selected={startDateTo}
                                onChange={(date) => setStartDateTo(date)}
                                name="to"
                                dateFormat={dateFormat}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Select Sources</Form.Label>
                        <Form.Select name="language" defaultValue={searchProps.source}>
                            {source.map((source) => (
                                <option key={source.id} value={source.id}>{source.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Select Language</Form.Label>
                        <Form.Select name="language" defaultValue={searchProps.language}>
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>{lang.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Search
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>

    );
}

export default FromComponent;
