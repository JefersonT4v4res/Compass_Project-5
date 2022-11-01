import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Home',
        size: 'sm',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Explore: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Explore</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
export const Notifications: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Notifications</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
export const Messages: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Messages</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
export const Bookmarks: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Bookmarks</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
export const List: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>List</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
export const Profile: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Profile</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
export const More: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>More</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}