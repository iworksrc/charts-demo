import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ToolbarWidgetComponent } from './toolbar-widget.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'ToolbarWidgetComponent',
  component: ToolbarWidgetComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        ReactiveFormsModule
      ],
    })
  ],
} as Meta<ToolbarWidgetComponent>;

const Template: Story<ToolbarWidgetComponent> = (args: ToolbarWidgetComponent) => ({
  component: ToolbarWidgetComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
