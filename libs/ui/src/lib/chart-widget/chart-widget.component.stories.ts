import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChartWidgetComponent } from './chart-widget.component';
import { PERIOD1, PERIOD2 } from '../../../../mocks/src';

export default {
  title: 'ChartWidgetComponent',
  component: ChartWidgetComponent,
  decorators: [
    moduleMetadata({
      imports: []
    })
  ],
  argTypes: {
    data: {
      options: [PERIOD1, PERIOD2],
      control: { type: 'radio' }
    }
  }
} as Meta<ChartWidgetComponent>;

const Template: Story<ChartWidgetComponent> = (args: ChartWidgetComponent) => ({
  component: ChartWidgetComponent,
  props: args
});


export const Primary = Template.bind({});
Primary.args = {
};
