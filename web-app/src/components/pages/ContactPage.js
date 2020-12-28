import React from 'react';
import {StyledFullPaper} from '../atoms/Paper';
import {PageTitle} from '../atoms/Title';
import {BasicTabs as Tabs} from '../molecules/Tabs';
import { ContactForm } from '../molecules/ContactForm';

const ContactPage = () => {
  return(
    <div>
        <PageTitle>お問い合わせ</PageTitle>
        <ContactForm/>
    </div>
    );
}

export default ContactPage;