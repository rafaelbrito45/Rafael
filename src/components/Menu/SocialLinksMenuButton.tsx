"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  Github,
  Linkedin,
  User,
  Send
} from 'lucide-react'
import { MenuButton } from './MenuButton'

const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/rafaelbrito45',
    icon: <Github size={14} />
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/rafael-brito-29a0b41a8/',
    icon: <Linkedin size={14} />
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5511984032956',
    icon: <Send size={14} />
  },
]

export function SocialLinksMenuButton() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger aria-label="Redes sociais">
        <MenuButton icon={User} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content side='right' className="bg-[#2a273f] z-10 flex flex-col rounded-lg overflow-auto">
          {socialLinks.map(socialItem => {
            return (
              <DropdownMenu.Item key={socialItem.url} className="outline-none">
                <a
                  href={socialItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E0DEF2] flex items-center gap-2 text-sm px-4 py-3 hover:bg-[#454066]"
                >
                  {socialItem.icon}
                  {socialItem.name}
                </a>
              </DropdownMenu.Item>
            )
          })}
          <DropdownMenu.Arrow className="fill-[#2a273f]" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}