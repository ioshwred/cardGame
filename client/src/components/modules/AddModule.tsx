import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap/';

type Props = { 
  saveModule: (e: React.FormEvent, formData: IModule | any) => void 
}

const AddModule: React.FC<Props> = ({ saveModule }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState<IModule | {}>()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <>
    <Button variant="primary" onClick={handleShow}>Add</Button>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>New Module</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form id="module-form" className='Form' onSubmit={(e) => saveModule(e, formData)}>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input className="form-control" onChange={handleForm} type='text' id='name' />
                </div>
                <div className="form-group">
                    <label htmlFor='description'>Description</label>
                    <input className="form-control" onChange={handleForm} type='text' id='description' />
                </div>
                <div className="form-group">
                    <label htmlFor='identifier'>Identifier</label>
                    <input className="form-control" onChange={handleForm} type='text' id='identifier' />
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Close
            </button>
            <button type="submit" form="module-form" className="btn btn-primary" disabled={formData === undefined ? true: false}>
                Save Changes
            </button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default AddModule