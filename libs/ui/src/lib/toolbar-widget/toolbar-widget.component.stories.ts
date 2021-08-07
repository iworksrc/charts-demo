import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ToolbarWidgetComponent } from './toolbar-widget.component';

export default {
  title: 'ToolbarWidgetComponent',
  component: ToolbarWidgetComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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