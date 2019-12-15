import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-mytemplate",
  templateUrl: "./mytemplate.component.html",
  styleUrls: ["./mytemplate.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class MytemplateComponent {
  private myTemplate: any = "";
  constructor(http: HttpClient, sanitizer: DomSanitizer) {
    http
      .get("https://getbootstrap.com/docs/4.0/components/collapse/", {
        responseType: "text"
      })
      .subscribe(res => {
        let src = "";
        let lines = res.split("\n");
        for (let line = 0; line < lines.length; line++) {
          console.log(lines[line]);
          if (
            lines[line] ===
            '<link href="/docs/4.0/assets/css/docs.min.css" rel="stylesheet">'
          ) {
            src +=
              '<link href="http://getbootstrap.com/docs/4.0/assets/css/docs.min.css">';
          } else if (
            lines[line].startsWith(
              '<link href="/docs/4.0/dist/css/bootstrap.min.css"'
            )
          ) {
            src +=
              '<link href="http://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css">';
          } else {
            src += lines[line];
          }
        }

        this.myTemplate = sanitizer.bypassSecurityTrustHtml(src); // this line bypasses angular security
      });
  }
}
