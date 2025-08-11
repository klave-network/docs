import { Rss, GraduationCap, Store, BookOpenText, Library } from 'lucide-react';
import Link from 'fumadocs-core/link';
import { Footer } from './footer';
import { MovingBorderButton } from './ui/moving-border-button';

export default function WelcomePage() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-4 md:gap-8">
                <div className="bg-card sm:col-span-2 sm:row-span-2 flex flex-col gap-4 justify-center rounded-lg border p-4 md:p-6 shadow-md">
                    <div className="flex justify-between items-center">
                        <span className="text-2xl sm:text-4xl font-owners font-medium tracking-wide">
                            Quickstart Guide
                        </span>
                    </div>
                    <span className="text-sm sm:text-lg text-left sm:w-1/2">
                        Learn how to get up and running with Klave through
                        tutorials, API references and platform resources.
                    </span>
                    <div className="flex">
                        <Link href="/quickstart/overview">
                            <MovingBorderButton
                                borderRadius="0.375rem"
                                className="bg-background border"
                            >
                                Get Started
                            </MovingBorderButton>
                        </Link>
                    </div>
                </div>
                {blocks.map((block) => (
                    <Link
                        key={block.title}
                        href={block.link}
                        className="bg-card no-underline flex flex-col rounded-lg border p-4 md:p-6 shadow-md transition-all hover:border-fd-primary hover:bg-fd-primary/20"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-owners font-medium tracking-wide">
                                {block.title}
                            </span>
                            {block.icon}
                        </div>
                        <span className="text-sm text-left">
                            {block.description}
                        </span>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
}

const blocks = [
    {
        title: 'Why Klave?',
        description:
            'Explore the Klave platform and discover the resources you need to get started.',
        link: '/what-is-klave',
        icon: (
            <svg
                className="size-6 "
                viewBox="-0.268 0.023 500.013 499.692"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g transform="matrix(0.1, 0, 0, -0.1, 0.751896, 700.725413)">
                    <path
                        fill="currentColor"
                        d="M2332.1,7005.6c-0.7-0.7-29.3-4.3-62.9-6.4c-57.9-4.3-85-7.9-132.2-15c-11.4-2.1-35.7-5.7-53.6-7.9 c-17.9-2.1-75.7-13.6-128.6-25C1436,6839.2,958,6556.9,603.5,6151.7c-47.2-53.6-138.6-170.8-172.2-221.5 c-7.1-10-22.2-31.4-34.3-48.6c-11.4-16.4-21.4-32.2-21.4-34.3c0-2.1-10.7-20.7-23.6-40.7c-38.6-59.3-50.7-81.5-103.6-187.2 c-43.6-89.3-115-255.1-118.6-277.3c-0.7-5-2.9-12.1-5.7-15.7c-12.9-20.7-81.5-282.3-94.3-357.3C0.4,4791.9-6,4729.7-6.7,4604.7 v-92.9l620.2-0.7l619.5-1.4l0.7,15.7c2.9,97.9,11.4,167.2,30.7,259.4c31.4,147.2,105.8,313.7,204.4,453.8 c51.4,72.9,185.8,213.7,255.1,265.8c261.5,197.2,593.1,288,913.2,249.4c137.9-17.1,258.7-52.2,388-113.6 c303.7-143.6,538.8-405.9,645.3-718.9c30-88.6,30-88.6,45.7-166.5c16.4-84.3,22.2-137.9,24.3-207.9l0.7-37.2h621.7 c568.8,0,621.7,1.4,622.4,12.1c1.4,21.4-1.4,132.2-4.3,168.6c-5.7,63.6-11.4,120.8-14.3,139.3c-1.4,10-5,32.2-7.1,50 c-2.1,17.9-9.3,57.9-15,89.3c-6.4,31.4-12.1,65-14.3,75c-5.7,30.7-44.3,172.9-60.7,225.1c-9.3,27.9-16.4,51.4-17.1,53.6 c-2.1,7.1-12.9,34.3-44.3,114.3c-35,89.3-103.6,232.2-137.9,289.4c-11.4,20-24.3,42.2-27.9,50c-11.4,25.7-122.9,191.5-170.8,253.7 c-116.5,151.5-314.4,353-433.7,440.2c-15.7,11.4-32.9,25-37.9,30c-5.7,4.3-40,29.3-76.5,55c-243.7,170.1-510.2,294.4-796.7,370.9 c-122.2,32.9-192.9,45.7-400.2,72.9C2692.2,7003.5,2336.4,7009.9,2332.1,7005.6z"
                    />
                    <path
                        fill="currentColor"
                        d="M1252.4,4509.6 c-9.3-2.1-12.1-10.7-12.9-39.3c-0.7-55.7-5.7-109.3-17.1-173.6c-15.7-90.8-54.3-227.2-68.6-241.5c-3.6-4.3-6.4-10.7-6.4-15.7 c0-10.7-36.4-88.6-69.3-147.2c-47.9-85.7-118.6-177.9-195.1-255.8c-87.9-88.6-110.8-108.6-194.4-165.1 c-52.9-35.7-195.8-113.6-217.2-118.6c-3.6-0.7-32.2-11.4-63.6-22.9c-79.3-30-160.8-50-250.1-62.2c-55-7.9-67.9-8.6-119.3-9.3 l-48.6-0.7v-623.8v-623.8l64.3,1.4c64.3,1.4,178.6,8.6,208.7,13.6c9.3,1.4,35.7,4.3,59.3,7.1c51.4,5.7,248,43.6,280.1,54.3 c12.1,3.6,31.4,8.6,42.2,10.7c37.9,7.1,230.8,72.9,310.8,107.2c96.5,40,244.4,115.8,324.4,165.1c66.5,40.7,120,75.7,125.1,80.7 c2.1,2.1,20,14.3,39.3,27.9c159.3,108.6,353,293.7,498.8,474.5c227.2,283,413.7,668.8,480.2,993.3c1.4,7.1,4.3,18.6,6.4,25 c2.1,6.4,5.7,23.6,7.9,37.2s5.7,30,7.1,35.7c1.4,5.7,4.3,20.7,6.4,32.2c1.4,12.1,5,34.3,7.9,50c12.9,82.9,17.1,126.5,22.9,227.2 c4.3,75,12.9,105.8,13.6,46.4c0-52.2,11.4-186.5,20.7-238c1.4-11.4,5-34.3,7.9-50c2.1-15.7,8.6-50.7,13.6-78.6 c5.7-27.2,11.4-57.9,13.6-67.9c5.7-35,27.2-112.2,55-203.7c91.5-293,233.7-558.8,435.2-815.3c55-70,245.1-268.7,307.3-321.6 c300.8-254.4,603.8-418,964.7-520.9c110-31.4,265.8-62.9,353.7-72.2c23.6-2.9,44.3-5.7,46.4-6.4c5.7-3.6,156.5-12.1,220.8-13.6 l54.3-0.7l1.4,620.2c0.7,468-1.4,621-7.1,623.1c-5,1.4-42.9,4.3-85,6.4c-42.2,2.9-80.7,5.7-85.7,7.9c-5,1.4-22.2,5-37.9,7.1 c-108.6,15.7-271.5,72.9-378.7,132.2c-82.2,46.4-82.2,45.7-150.1,96.5c-149.3,110.8-263,240.8-352.3,403 c-20.7,37.2-37.2,67.9-37.2,69.3s-7.9,19.3-16.4,40c-25,56.5-57.2,151.5-66.5,195.1c-1.4,7.9-5.7,28.6-10,46.4 c-12.9,59.3-22.2,138.6-24.3,211.5c-0.7,16.4-2.9,32.9-5.7,35c-3.6,4.3-908.2,6.4-1238.4,3.6c-15.7,0-298.7,0.7-629.5,1.4 C1534.6,4511.1,1258.8,4511.1,1252.4,4509.6z M2494.3,4465.3c2.1-3.6,0.7-7.1-2.9-7.1c-4.3,0-7.9,3.6-7.9,7.1 c0,4.3,1.4,7.1,2.9,7.1C2488.6,4472.5,2492.1,4469.6,2494.3,4465.3z"
                    />
                </g>
            </svg>
        )
    },
    {
        title: 'Templates',
        description:
            'Launch into app development with ease using our library of pre-built application templates.',
        link: 'https://klave.com/marketplace',
        icon: <Store />
    },
    {
        title: 'SDK',
        description:
            'Find out how to use Klave SDK to create your first application.',
        link: '/sdk/latest',
        icon: <Library />
    },
    {
        title: 'Whitepaper',
        description: "Deep dive into Klave's technology and its applications.",
        link: '/whitepaper',
        icon: <BookOpenText />
    },
    {
        title: 'Learn',
        description: 'Learn more about Klave and its architecture.',
        link: '/learn/architecture',
        icon: <GraduationCap />
    },
    {
        title: 'Newsletter',
        description:
            'Get short, sweet and brief product updates, company news, and more.',
        link: 'https://secretarium.com/newsletter',
        icon: <Rss />
    },
    {
        title: 'GitHub',
        description:
            'Explore the Klave codebase and contribute to the project.',
        link: 'https://github.com/klave-network',
        icon: (
            <svg
                role="img"
                className="size-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        )
    },
    {
        title: 'Join our Discord',
        description:
            'Join the Klave community and connect with other developers.',
        link: 'https://discord.gg/MkUxsVeqDW',
        icon: (
            <svg
                role="img"
                className="size-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
        )
    }
    // {
    //   title: 'Follow on X',
    //   description: 'Stay up to date with the latest news and updates from Klave.',
    //   link: 'https://x.com/KlaveNetwork',
    //   icon: <svg
    //         role="img"
    // 			className="size-6"
    // 			fill="none"
    //         viewBox="0 0 1200 1227"
    //         xmlns="http://www.w3.org/2000/svg">
    //           <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
    //   </svg>
    // }
];
