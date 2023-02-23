import Head from 'next/head'
import { TextInput, ActionIcon, useMantineTheme, Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';
import { IconMail, IconArrowLeft } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 180,
    paddingBottom: 130,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: 'Red Hat Display, sans-serif',

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export default function Home() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>SaintSpace</title>
        <meta name="description" content="Church Management Tech Revival" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="header-bar">
            <svg className="header-logo" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="286.000000pt" height="286.000000pt" viewBox="0 0 286.000000 286.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,286.000000) scale(0.100000,-0.100000)"
fill="#fff" stroke="none">
<path stroke="#fff" stroke-width="35" d="M110 2720 c0 -62 236 -353 600 -740 166 -176 720 -746 724 -744 2 0
52 -46 112 -104 650 -623 941 -885 1104 -993 69 -46 120 -62 120 -39 0 135
-1083 1283 -2000 2120 -353 322 -467 418 -566 479 -51 31 -94 40 -94 21z m122
-72 c178 -131 600 -514 970 -877 131 -128 238 -231 238 -229 0 3 134 -131 298
-296 267 -270 453 -468 698 -741 171 -191 315 -377 302 -390 -7 -7 -151 99
-268 199 -216 183 -507 453 -807 750 -123 121 -223 218 -223 215 0 -10 -580
580 -725 737 -200 215 -400 443 -488 557 -125 159 -124 171 5 75z"/>
<path stroke="#fff" stroke-width="50" d="M1000 2360 c0 -20 6 -20 685 -20 l685 0 0 -680 c0 -674 0 -680 20
-680 20 0 20 5 18 698 l-3 697 -702 3 c-698 2 -703 2 -703 -18z"/>
<path stroke="#fff" stroke-width="50" d="M467 1149 c2 -380 5 -695 8 -700 4 -5 286 -9 706 -9 692 0 699 0 699
20 0 20 -7 20 -685 20 l-685 0 0 680 0 680 -22 0 -23 0 2 -691z"/>
</g>
</svg>
            <div className="header-title">
                SaintSpace
            </div>    
        </div>
        <div className={classes.wrapper}>
      <Overlay color="#121212" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" inherit className={classes.highlight}>
          Church Management{' '}
          </Text>
          Tech Revival
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Say goodbye to clunky, outdated church management systems and unleash the power of modern technology. We&apos;re building the next generation of cloud software to revolutionize the way you run your church.
          </Text>
        </Container>

        {/* <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </div>
        <TextInput
      radius="xl"
      size="md"
      rightSection={
        <Button size="lg">
            Live demo
        </Button>
      }
      placeholder="Enter your email address"
      rightSectionWidth={42}
    /> */}
      </div>
    </div>
    </>
  )
}