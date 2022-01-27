import React, { useState } from 'react'

import { IconButton } from '../Button'
import ConfigurationDialog from '../ConfigurationDialog'

const Configuration = <T extends object>(props: T) => {
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <IconButton {...props} onClick={() => setOpen(true)}>
        ᎒
      </IconButton>
      {open && <ConfigurationDialog onClose={() => setOpen(false)} />}
    </React.Fragment>
  )
}

export default Configuration
