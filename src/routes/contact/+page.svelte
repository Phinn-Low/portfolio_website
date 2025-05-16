<svelte:head>
  <title>Get in Touch</title>
  <meta name="contact form" content="A form for people to get in touch with me or leave me a message."/>
</svelte:head>

<script lang="ts">
  // variables for form submission
  let name: string = '';
  let email: string = '';
  let subject = '';
  let messageContent: string = '';

  let formMessage: { text: string; type: 'success' | 'error' | '' } = { text: '', type: '' };

  // validate email addresses according to a regex
  function validateEmail(emailAddress: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(emailAddress).toLowercase());
  }

  // handle form submission
  async function handleSubmit() {
    // basic validation
    if (!name.trim() || !email.trim() || !subject.trim() || !messageContent.trim()) {
      formMessage = {text: 'Please fill out all fields.', type: 'error' };
      return
    }

    if (!validateEmail(email)) {
      formMessage = {text: 'Please enter a valid email address.', type: 'error' };
    }
  }
</script>
