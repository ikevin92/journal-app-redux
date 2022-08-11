import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { positions } from '@mui/system'
import { JournalLayout } from '../layout'
import { NoteView, NothingSelectedView } from '../views'


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Adipisicing ipsum officia proident commodo et cupidatat do. Elit dolore occaecat reprehenderit deserunt irure dolore duis esse excepteur reprehenderit. Consectetur ex culpa in non aute eiusmod dolor elit ad. Excepteur et aute quis ex aliqua voluptate ad ut voluptate voluptate sit sunt enim. Ullamco Lorem excepteur in Lorem quis. Excepteur ipsum ad do deserunt minim nisi.</Typography> */ }

      <NothingSelectedView />
      {/* <NoteView /> */ }


      <IconButton size='large'
        sx={ {
          color: 'white', backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main', opacity: 0.9
          },
          position: 'fixed',
          right: 50,
          bottom: 50,
        } }
      >

        <AddOutlined
          sx={ { fontSize: 30 } }
        />

      </IconButton>

    </JournalLayout >
  )
}