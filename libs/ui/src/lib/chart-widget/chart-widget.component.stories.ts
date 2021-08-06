import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChartWidgetComponent } from './chart-widget.component';

export default {
  title: 'ChartWidgetComponent',
  component: ChartWidgetComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChartWidgetComponent>;

const Template: Story<ChartWidgetComponent> = (args: ChartWidgetComponent) => ({
  component: ChartWidgetComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}