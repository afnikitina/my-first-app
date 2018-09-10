import { Component } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imageUrl: string;
  pubId: string;

  upload(): void {
    cloudinary.openUploadWidget({ cloud_name: 'deep-dive', upload_preset: 'lostpaws'},
      function(error, result) {
      /*this.imageUrl = result[0].url.toString();*/
        console.log(result[0]);
      console.log('secure URL: ' + result[0]['secure_url']);
      console.log('public ID: ' + result[0]['public_id']);


      /*this.pubId = result[0]['public_id'];
        console.log("public ID: " + this.pubId);*/

      /*this.imageUrl = result[0]['secure_url'];
      console.log("this.imageUrl: " + this.imageUrl);*/
    });
  }

}
