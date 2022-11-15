import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModelName } from 'src/app/models/model_name';
import { ResultsNumericSolve } from 'src/app/models/results_numeric_solve';
import { SolveModelService } from 'src/app/services/solve-model.service';
import { StyleServiceService } from 'src/app/services/style-service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-results-numeric',
  templateUrl: './results-numeric.component.html',
  styleUrls: ['./results-numeric.component.css']
})
export class ResultsNumericComponent implements OnInit {

  subscription: Subscription = new Subscription();
  results: ResultsNumericSolve = new ResultsNumericSolve();
  model_name: ModelName = new ModelName();

  constructor( private router: Router, private modelService:SolveModelService, public styleService:StyleServiceService) { }

  ngOnInit(): void {
    this.subscription=this.modelService.obtResultsNumeric().subscribe(data => {
      this.results = data;
    })

    this.subscription=this.modelService.obtModelName().subscribe(data => {
      this.model_name = data
    })
  }

  downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA!, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`resultados.pdf`);
    });
  }

}
