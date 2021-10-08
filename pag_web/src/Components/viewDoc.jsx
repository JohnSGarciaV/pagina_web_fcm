import '../styles/stylespdf.css';
import React, { Component } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';


class PDFView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            enlace: null
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal(info){
        this.setState({ show: false, enlace: info.link });
    }

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <Modal show={this.state.show} onHide={this.hideModal}>
                <ModalBody>
                    <object data={this.state.enlace} type="application/pdf">
                    </object>
                </ModalBody>
            </Modal>

        );
    }
}

export default PDFView;