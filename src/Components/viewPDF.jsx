import React  from 'react';
import { Modal, ModalBody, ModalTitle } from 'react-bootstrap';


const ViewPDF = ({show, setShow, info}) => {
    return (
        
        <Modal show={show} onHide={() => setShow(false)} size="xl" >
            <Modal.Header closeButton>
                <ModalTitle style={{fontSize:20}}>
                  {info.nombre}
                </ModalTitle>
            </Modal.Header>
            
            <ModalBody style={{height:"80vh", paddingLeft:"50px", paddingRight:"50px", margin:"0px"}}>
                {console.log(info.link)}
                <iframe src={info.link} ></iframe>
            </ModalBody>
        </Modal>
    );
}

export default ViewPDF;