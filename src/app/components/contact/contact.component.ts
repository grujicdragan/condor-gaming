import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  btnText = "SEND";
  loading = false;
  messageText = "";
  msgName = "";
  msgMail = "";
  msgTitle = "";
  msgMessage = "";
  notification = "";

  contact_icons = [
    {
      "img": "assets/placeholder.png",
      "text": "FIND US"
    },
    {
      "img": "assets/facebook.png",
      "text": "CHAT WITH US"
    },
    {
      "img": "assets/phone-call.png",
      "text": "GIVE US A CALL"
    }
  ]

  constructor(private http: HttpClient, private service: HttpService) { }

  ngOnInit(): void { }

  validateEmail(email: any) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  sendMail() {
    if ((this.msgName || this.msgMail || this.msgMessage || this.msgTitle) === "") {
      this.notification = 'Please fill all fields!';
      document.getElementById('notification')!.style.color = "#f71616"
      setTimeout(() => {
        this.notification = '';
      }, 3000);
    } else if (!this.validateEmail(this.msgMail)) {
      this.notification = 'Please enter valid email adress!';
      document.getElementById('notification')!.style.color = "#f71616"
      setTimeout(() => {
        this.notification = '';
      }, 3000);
    } else {
      let spin = document.getElementById('spin');
      spin.classList.add('active');
      this.loading = true;
      this.btnText = "SENDING...";
      let contact = {
        name: this.msgName,
        phone: this.msgMail,
        mail: this.msgTitle,
        message: this.msgMessage
      }
      this.service.sendEmail("https://mail-control-app.herokuapp.com/send", contact).subscribe(
        data => {
          let res: any = data;
          console.log(`${contact.name} has sent you an email!`)
        },
        error => {
          console.log(error);
          setTimeout(() => {
            spin.classList.remove('active');
          }, 3000);
          this.loading = false;
          this.notification = 'Something went wrong.';
          this.btnText = "SEND";
        }, () => {
          setTimeout(() => {
            spin.classList.remove('active');
            this.loading = false;
            this.btnText = "SEND";
            document.getElementById('notification')!.style.color = "#9bff87"
            this.notification = "Message sent."
          }, 3000);
        }
      );
    }
  }
}
