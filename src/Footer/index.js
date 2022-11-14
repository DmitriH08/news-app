import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { MinusPage } from './Minus/MinusPage';
import { PlusPage } from './Plus/PlusPage';


 export const PaginationComponent = () => {
  const [page, setPage] = useState(0);
function MinusEvent(){
  setPage(page -1)
}
function PluseEvent() {
  setPage( page +1)
}
  return (
    <div> 
    <Pagination className="mt-4 justify-content-center">
      {/* <Pagination.Prev onClick={()=> setPage(page -1)}/> */}
      <Pagination.Prev onClick= {MinusEvent} stopMinus = {page}/>
      <Pagination.Item disabled>{page}/100</Pagination.Item>
      <Pagination.Next onClick= {PluseEvent} stopPlus ={page}/>
    </Pagination>
    </div>
  );
}

// export default PaginationComponent;
// react bootstrap pagination documenetation - HW