import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddFolderButton() {
  const [open, setOpen] = useState(false)

  function openModal(){
    setOpen(true)
  }
  function closeModal(){
    setOpen(false)
  }
  return (
    <>
    <Button onClick={openModal} variant="outline-success" size="sm">
      <FontAwesomeIcon icon={faFolderPlus}/>
    </Button>
    <Modal show={open} onHide={closeModal}>
Frick
    </Modal>
    </>
  )
}
