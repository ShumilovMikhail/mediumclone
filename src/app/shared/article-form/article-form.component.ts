import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ArticleInputInterface } from "../types/articleInput.interface";
import { BackendErrorsInterface } from "../../auth/types/backendErrors.interface";

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss'
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValues: ArticleInputInterface;
  @Input('isSubmitting') isSubmitting: boolean;
  @Input('errors') errors: BackendErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent: EventEmitter<ArticleInputInterface> = new EventEmitter<ArticleInputInterface>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.initializeForm();
  };

  onSubmit(): void {
    const formValue: ArticleInputInterface = {
      ...this.form.value,
      tagList: this.form.value['tagList'].split(' ')
    }
    this.articleSubmitEvent.emit(formValue);
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      title: [this.initialValues.title],
      description: [this.initialValues.description],
      body: [this.initialValues.body],
      tagList: [this.initialValues.tagList.join(' ')]
    });
  };
};

// [Validators.required, Validators.minLength(3)]
