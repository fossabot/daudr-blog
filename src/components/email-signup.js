import React, { useState } from "react"
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { rhythm } from "../utils/typography"

import addToMailchimp from "gatsby-plugin-mailchimp"

function EmailSignup() {
  const [email, setEmail] = useState("")
  const [data, setData] = useState({})
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleClick = event => {
    event.preventDefault()
    addToMailchimp(email).then(data => {
      setEmail("")
      setData(data)
    })
  }

  const checkMail = email => {
    const regexp = /\S+@\S+\.\S+/;
    const test = regexp.test(email);
    setInvalidEmail(!test);
    setEmail(email);
  }

  let emailText = ""

  if (data.result === `success`) {
    emailText = `Signed in successfully!`
  } else if (data.result === `error`) {
    emailText = `Some error occurred whilst signing you up, please retry`
  }

  return (
    <div style={{ margin: rhythm(1), textAlign: `center` }}>
      <p style={{ marginBottom: 0 }}>
        Do you want to be updated when new articles are being published?
      </p>
      <p style={{ marginBottom: rhythm(1 / 2) }}>
        Join the newsletter!{" "}
        <span role="img" aria-label="sunglasses smile">
          😎
        </span>
      </p>
      <form
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          alignItems: `baseline`,
          justifyContent: `center`,
        }}
      >
        <FormControl error={invalidEmail}>
          <TextField
            id="email"
            name="email"
            label="Email"
            margin="normal"
            variant="outlined"
            helperText={emailText}
            value={email}
            onChange={event => checkMail(event.target.value)}
          />
          <FormHelperText data-cy="error-text" hidden={!invalidEmail}>Invalid email</FormHelperText>
        </FormControl>
        <Button
          onClick={handleClick}
          variant="outlined"
          color="primary"
          disabled={email === "" || invalidEmail}
          style={{ marginLeft: rhythm(1 / 2), height: `56px` }}
        >
          Add me!
        </Button>
      </form>
    </div>
  )
}

export default EmailSignup
