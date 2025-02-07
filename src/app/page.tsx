import { Container } from '@/components/Container';
import { Link } from '@/components/Link';
import { cn } from '@/lib/utils';

function SocialLink({ href, text }: {
  href: string;
  text: string;
}) {
  const icons = {
    github: 'i-lucide-github',
    twitter: 'i-lucide-twitter',
    email: 'i-lucide-mail',
    telegram: 'i-ri-telegram-2-line',
    steam: 'i-ri-steam-line',
    bluesky: 'i-ri-bluesky-line',
    sponsor: 'i-lucide-heart',
  };
  return (
    <Link href={href} target='_blank' rel='noopener'>
      <span className={cn(icons[text.toLowerCase() as keyof typeof icons], 'inline-block mr-1 h-4 w-4')} />
      {text}
    </Link>
  );
}

export default function Page() {
  return (
    <Container>
      <div className='flex flex-col justify-between gap-10 md:m-10 lg:flex-row'>
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

        <div className='flex flex-col gap-2 md:w-2/5'>
          <SocialLink href='https://github.com/VLTHellolin' text='GitHub' />
          <SocialLink href='https://x.com/VLTHellolin' text='Twitter' />
          <SocialLink href='mailto:i@hellolin.top' text='Email' />
          <SocialLink href='https://t.me/VLTHellolin' text='Telegram' />
          <SocialLink href='https://steamcommunity.com/id/hellolin/' text='Steam' />
          <SocialLink href='https://bsky.app/profile/hellolin.top' text='Bluesky' />
          <SocialLink href='https://afdian.com/a/hellolin' text='Sponsor' />
        </div>
      </div>
    </Container>
  );
}
