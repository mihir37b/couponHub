import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import  Navbar  from './Navbar'
import { useFolder } from '../../hooks/useFolder'
import Folder from './Folder'
import { useParams } from 'react-router-dom'
import FolderBreadCrumbs from './FolderBreadCrumbs'

export default function Dashboard() {
  const { folderId } = useParams()
  const { folder, childFolders } = useFolder(folderId)

  return (
    <>
    <Navbar/>
    <Container fluid>  
    <div className="d-flex align-items-center">
      <FolderBreadCrumbs currentFolder={folder} />
      <AddFolderButton currentFolder={folder} />
    </div>
      {childFolders.length > 0 && (
        <div className="d-flex flex-wrap">
          {childFolders.map(childFolder => (
            <div key={childFolder.id} style={{maxWidth: '200px'}} className="p-2">
              <Folder folder={childFolder}/>
            </div>
          ))}
        </div>
      )}
    </Container>
    </>
  )
}

