import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChartWidgetComponent } from './chart-widget.component';
import { PERIOD1, PERIOD2 } from '@charts-demo/mocks';

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
      options: ['PERIOD1', 'PERIOD2'],
      mapping: {
        PERIOD1,
        PERIOD2
      },
      control: { type: 'select' }
    },
    showAxis: {
      options: [true, false],
      control: {type: 'boolean'}
    },
    color: {
      control: {type: 'color'}
    }
  }
} as Meta<ChartWidgetComponent>;

const Template: Story<ChartWidgetComponent> = (args: ChartWidgetComponent) => ({
  component: ChartWidgetComponent,
  props: args
});


export const Primary = Template.bind({});
Primary.args = {
  // data: PERIOD2
};
