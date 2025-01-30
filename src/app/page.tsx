import { Container } from '@/components/Container';
import { Link } from '@/components/Link';
import { Icon } from '@iconify/react';

function SocialLink({ href, icon, text }: { href: string; icon: string; text: string }) {
  return (
    <Link href={href} target='_blank' rel='noopener'>
      <Icon icon={icon} className='mr-1 block md:inline' />
      {text}
    </Link>
  );
}

export default function Page() {
  return (
    <Container>
      <div className='m-2 flex flex-col justify-between gap-10 md:m-10 lg:flex-row'>
        <div>
          <div className='flex items-baseline gap-2'>
            <span className='text-2xl font-semibold'>
              Hellolin
            </span>
            <span className='text-sm text-muted-foreground'>
              @VLTHellolin
            </span>
          </div>
          <div className='text-muted-foreground'>
            <p className='pt-5'>
              A frontend developer, competitive programmer and UI/UX enthusiast from China, passionate about open-source development.
            </p>
            <p className='pt-3'>
              Interested in language learning, good at English and studying Japanese.
            </p>
            <p className='pt-3'>
              Enjoy watching animes, reading novels and playing video games, love pop, rock and electronic music.
            </p>
            <p className='pt-3'>
              That's all about me! :)
            </p>
          </div>
        </div>

        <div className='w-2/5 flex flex-col gap-2'>
          <SocialLink href='https://github.com/VLTHellolin' icon='lucide:github' text='GitHub' />
          <SocialLink href='https://x.com/VLTHellolin' icon='lucide:twitter' text='Twitter' />
          <SocialLink href='mailto:i@hellolin.top' icon='lucide:mail' text='Email' />
          <SocialLink href='https://t.me/VLTHellolin' icon='ri:telegram-2-line' text='Telegram' />
          <SocialLink href='https://steamcommunity.com/id/hellolin/' icon='ri:steam-line' text='Steam' />
          <SocialLink href='https://bsky.app/profile/hellolin.top' icon='ri:bluesky-line' text='Bluesky' />
          <SocialLink href='https://afdian.com/a/hellolin' icon='lucide:heart' text='Sponsor' />
        </div>
      </div>
    </Container>
  );
};
