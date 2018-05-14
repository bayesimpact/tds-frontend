import Dialog from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import * as React from 'react'
import { SecureLink } from '../../utils/link'
import './AboutDialog.css'

type Props = {
  isOpen: boolean
  onCloseClick: () => void
}

export let AboutDialog: React.StatelessComponent<Props> = ({
  isOpen, onCloseClick
}) => {
  let beaconLink = SecureLink('https://www.thebeaconlabs.org', 'Beacon Labs')
  let emailLink = SecureLink('mailto:encompass@thebeaconlabs.org?subject=About%20Encompass', 'encompass@thebeaconlabs.org')
  let githubLink = SecureLink('https://github.com/beaconlabs/encompass', 'GitHub repository')
  let termsOfUseLink = SecureLink('https://www.thebeaconlabs.org/terms-of-use', 'Terms of Use')
  let privacyPolicyLink = SecureLink('https://www.thebeaconlabs.org/privacy-policy', 'Privacy Policy')
  let licenseLink = SecureLink('http://www.apache.org/licenses/LICENSE-2.0', 'http://www.apache.org/licenses/LICENSE-2.0')
  let githubLongLink = SecureLink('https://github.com/beaconlabs/encompass', 'https://github.com/beaconlabs/encompass')

  return <Dialog
    autoScrollBodyContent={true}
    open={isOpen}
    onRequestClose={onCloseClick}
    title={
      <div className='DialogCloseButton'>
        <IconButton onClick={onCloseClick}><NavigationClose /></IconButton>
      </div>
    }
  >
    <div className='AboutDialog'>
      <div className='Flex -Center'>
        <img className='AboutLogoImg' alt='beacon-logo' src='https://s3-us-west-2.amazonaws.com/encompass-public-data/images/BeaconLabs.png' />
      </div>
      <p>
        Encompass is an analytics and mapping tool built by {beaconLink} that enables policymakers, researchers, and consumer advocates to analyze how accessibility
        to social services varies across demographic groups. Inadequate and untimely access to health care services is a major barrier to health equity for disadvantaged
        communities. Existing tools used to map systems at this scale are prohibitively expensive, require significant amounts of manual data processing, and are too
        coarse to accurately depict accessibility issues. We set out to build a solution that eliminates those barriers.
      </p>
      <p>
        If you are a researcher or policy expert, we would love to hear from you. Please contact us at {emailLink} and let us know how Encompass
        might be useful to you. If you are a software developer interested in contributing to our mission, please visit our {githubLink} for more details.
      </p>
      <hr />
      <p>
        Your use of Encompass is governed by the {termsOfUseLink}. By using Encompass, you agree to the Terms of Use and
        our {privacyPolicyLink}. The source code for Encompass is available for download as open source software at the following site: {githubLongLink}.
      </p>
      <p>
        The source code for Encompass is licensed under the Apache License, Version 2.0 (the “License”). You may not use the source code except in compliance
        with the License. You may obtain a copy of the License at: {licenseLink}.
      </p>
    </div>
  </Dialog>
}
