import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import {setErrorMessage, setSearchParams } from '../../Services/stateService';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector,useDispatch } from 'react-redux'; 



function FromComponent({ show, handleClose,searchProps}) {

    const [startDateFrom, setStartDateFrom] = useState(new Date());
    const [startDateTo, setStartDateTo] = useState(new Date());
    const dateFormat ="dd.MM.yyyy";
    const pageSize = useSelector((state) => state.searchParams.pageSize);
    const dispatch = useDispatch();
    const languages = [
        { label: 'English', code: 'en' },
        { label: 'Russian', code: 'ru' },
        { label: 'Germany', code: 'de' },
        { label: 'Franch', code: 'fr' },
    ];

    function upperText(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    // Sobitija eto vzaimodejstvie mezdu polzovatelem  i nawem prilozeniem
    // Polzovatel chtoto -delaet v brauzere, brauzer lovit eti dvizenija i peredaet ifo nawemu prilozeniju
    // V zavisimosti ot triggerov nawe prilzenije obrabativaet poluchdnnie dannie
    // Triggeri bivajut raznie, naprimer trigger pri nazatii knopki miwki, nazivaetsa onClick
    // Trigerri vewajutsa na elementi za kotorimi mi hotim sledit
    // Trigeri zapuskajut obrabotchiki
    // Obrabotchiki eto obichnie funktsii
    // Brauzer peredaet nawim obrabotchikam polnij otchet o dejstvii / sobitii v vide objecta DOM
    // Glavnoe svojstvo etogo objecta javlaetsa 'target' v kotorm hranitsa info ob elemente nad kotorim proizowlo sobitie
   async function handleSubmit(event) {
    // preventDefault eta funktsija zastovljaet brauzer prekratit 'vipolnja' izvestnoe jemu dejstvie etogo sobitija
    // v nawem sluchae eto zastavljaet otmenit o tpravku dannih na server.
        event.preventDefault();
        console.log(event.target.from)
        //console.log(event.target.from.value) - chtobi iskat po znacheniju
        const data = {
            q: event.target.q.value,
            from: moment(startDateFrom).format("YYYY-MM-DDT00:00:00.000"),
            to: moment(startDateTo).format("YYYY-MM-DDT23:59:59.999"),
            language: event.target.language.value,
            searchIn: [...event.target.searchIn].filter(input => input.checked).map(input => input.value).join(','),
            pageSize,
            page:1,
        };


        if(moment(data.from).isAfter(data.to)){
          dispatch(setErrorMessage("Wrong data from"));
            return;
        }


        
        dispatch(setSearchParams(data));
        handleClose();
    }
    return (

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search News</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label >Keywords</Form.Label>
                        <Form.Control 
                        type="text"
                        name="q" 
                        placeholder="Enter keywords or phrases"
                        defaultValue ={searchProps.q} />

                        <Form.Text className="text-muted">
                            Advanced search is supported.
                        </Form.Text>
                    </Form.Group>
                    {['title', 'description', 'content'].map((titleName) => (
                        <div key={`${titleName}`} className="mb-3">
                            <Form.Check
                                label={upperText(titleName)}
                                name="searchIn"
                                type="checkbox"
                                value={titleName}
                                id={`inline-${titleName}-1`}
                                defaultChecked = {searchProps.searchIn.includes(titleName)}
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
                        <Form.Label>Select Language</Form.Label>
                        <Form.Select name="language" defaultValue = {searchProps.language}>
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