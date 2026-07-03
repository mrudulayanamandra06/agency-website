import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

  form = {
    from_name: '',
    from_email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_ytkmwjt',
      'template_aw1pyiq',
      this.form,
      'S7cJoxBZ1zXNgZrny'
    )
    .then(() => {
      alert('Message sent successfully!');

      this.form = {
        from_name: '',
        from_email: '',
        message: ''
      };
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert(`Error: ${error.text || JSON.stringify(error)}`);
    });
  }

}