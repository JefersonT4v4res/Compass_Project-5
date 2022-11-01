import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'


export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Tweet',
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    args: {
        style: 'df',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}

export const Tweet: StoryObj<ButtonProps> = {
    args: {
        style: 'twt',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}

export const follow: StoryObj<ButtonProps> = {
    args: {
        children: 'Follow',
        style: 'flw',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}

