import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChatLineWidgetComponent } from './chat-line-widget.component';
import { PERIOD1, PERIOD2 } from '@charts-demo/mocks';

export default {
  title: 'ChatLineWidgetComponent',
  component: ChatLineWidgetComponent,
  decorators: [
    moduleMetadata({
      imports: [],
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
    },
    setHeight: {
      control: {type: 'number'}
    },
    setWidth: {
      control: {type: 'number'}
    }
  }
} as Meta<ChatLineWidgetComponent>;

const Template: Story<ChatLineWidgetComponent> = (args: ChatLineWidgetComponent) => ({
  component: ChatLineWidgetComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
