import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductApiService } from 'src/app/services/product.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  public productForm : FormGroup;
  public submitted:boolean = false;
  public state:any;
  
  constructor(private formBuilder : FormBuilder, private productSrv : ProductApiService, private router:Router, public activateRoutes:ActivatedRoute) { 
    //init product form
    this.productForm = this.formBuilder.group({
      id:[''],
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      available: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.state = this.activateRoutes.paramMap.pipe(()=>window.history.state);
    // console.log(this.state);
    //patchValue will autofill the data into form
    this.productForm.patchValue(this.state);
  }

  public onSubmit(form:any) {
    if(form.valid){
      //console.log(this.productForm.value)
      this.productSrv.updateProduct(this.productForm.value).subscribe((data : any) =>{
        console.log("product updated succesfully")
        //console.log(data);
        this.router.navigateByUrl("/products");
      });
    }else{
      console.log("invalid form");
      this. validateForm(form);
    }
  }
  validateForm(form: any) {
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true });
      } else{
        this.validateForm(control)
      }
    })
  }

  hasError(field: string) { 
    let formField = this.productForm.get(field);
    return  formField?.invalid &&  formField?.touched  && formField?.errors;
  }

  get form() {
    return this.productForm.controls;
  }

  get Name() {
    return this.productForm.get('name');
  }

  get Price() {
    return this.productForm.get('price');
  }
}
