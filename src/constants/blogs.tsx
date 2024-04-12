export const blogs = [
    {
        id: 1,
        author: 'Alexandra White',
        authorImage: '/assets/images/blog/authors/alexandrawhite.png',
        authorBio: 'Alexandra is an AI expert with a passion for leveraging cutting-edge technologies to solve complex problems. With a background in computer science and machine learning, he specializes in developing intelligent systems that drive innovation and efficiency across diverse industries.',
        category: 'AI',
        title: 'Learning from you about AI',
        image: '/assets/images/blog/latest-1.jpg',
        heading: 'What we learned from you about AI and the web today.',
        tags: ['AI', 'Machine Learning'],
        recent: true,
        content: (
            <>
                <div className="flex flex-col gap-3">
                    <p>Like many of you, we've been having lots of conversations about artificial intelligence and the future of the web. There's a lot of noise, and it's hard to know what exactly we, as web developers, need to know. The web is so much bigger than our team, so we wanted to gain some clarity around how you're thinking about AI, what you hope to learn, and what you want to do with these emerging technologies. That way, we can best provide you with content to break through that noise.</p>
                    <p>Over the last few months, we've spoken with web practitioners to understand the landscape and how you think about AI. Of course, we can't talk to everyone about everything. We had just a small set of conversations with web developers, including web Google Developer Experts, focused on how developers are using AI to deliver user-facing features and to increase productivity in their daily workflow.</p>
                    <p>We believe that what we learned may be broadly applicable to other folks on the web. And, we thought the community may be interested in hearing what we've learned.</p>
                    <p>We took this feedback, along with other research of the web developer landscape, to create our new AI collection. In this collection, you'll find overviews geared towards web developers, codelabs and demos, and other resources for thinking about AI tools and models on the web.</p>
                    <p>And this is just the beginning. You'll see much more from us in the coming months.</p>
                </div>
                <h4 className="text-6">Improved productivity with generative AI</h4>
                <div className="flex flex-col gap-3">
                    <p>We noticed that web developers want to take advantage of generative AI to increase their productivity and interact with chat bots to learn new technologies or seek answers to their web development questions.</p>
                    <p>The developers we talked to are either already using AI in their daily workflow, for business or personal projects, or know someone who is.</p>
                </div>
                <h4 className="text-5">Code generation</h4>
                <div className="flex flex-col gap-3">
                    <p>We learned from you that code generation tools, such as Gemini and Copilot, are great for standard unit tests, basic autocomplete (where you know what to write, but just need to write it), and simpler functions that don't require expansive knowledge of the codebase. These tools tend to be less useful when it comes to writing more complex, algorithmic code and functions that require broad context of a specific project.</p>
                    <p>More senior developers mentioned a concern around the long-term quality of their codebases, including issues around code duplication and long-term maintainability. Some were concerned that less experienced team members may not detect errors or know how to accurately validate the code produced by generative AI tools.</p>
                    <p>Developers have also shared that use cases which require specific domain knowledge, such as writing accessible components, aren't yet accommodated correctly by code generation tools they've tried.</p>
                </div>
                <h4 className="text-5">Learning with LLMs</h4>
                <div className="flex flex-col gap-3">
                    <p>We've seen many developers using ChatGPT and Gemini to learn software development concepts, like asking a large language model (LLM) to explain how a sorting algorithm works, ramping up on different programming languages, or closing knowledge gaps.</p>
                    <p>You think LLMs provide a great experience due to the quick interactivity of questions and responses, and because AI won't criticize the questions being asked, and just provide the answer they need.</p>
                    <p>Once again, there is a concern related to more junior developers, where a minimal level of knowledge is necessary to catch the instances where the model is hallucinating and generating incorrect responses.</p>
                </div>
                <h4 className="text-5">IP protection as a business concern</h4>
                <div className="flex flex-col gap-3">
                    <p>Many of the developers we spoke with said their companies don't yet have policies around developers using generative AI to increase their productivity. Usage of generative AI tools is often driven by the developers experimenting with it.</p>
                    <p>However, businesses that do have a policy tend to discourage usage, due to concerns around leaking the company's intellectual properties (IP) to third parties. There are cases where such policies have been changed, after engaging directly with the companies behind these tools to understand how the data is used and potential risks.</p>
                    <p>With enterprise accounts and partnerships which are dedicated to ensure data protection, businesses are more likely to encourage developer usage.</p>
                </div>
                <h4 className="text-6">Generative AI for user facing product features</h4>
                <div className="flex flex-col gap-3">
                    <p>On the product side, it wasn't a surprise to us that, when we prompted our conversation with the term "AI / ML," the response was often focused on generative AI. Developers are curious on how generative AI can be used to improve the experience for their users, but are unsure about what those experiences look like and what are the tools available to deliver them in production.</p>
                    <p>For those developers that have built or are building generative AI features into their products, using generative AI to answer user questions, with chatbots or one-off interfaces, is the most common use-case.</p>
                    <p>Output quality is the top concern we heard from you. In particular, developers hope to ensure the responses are accurate and aim to prevent the LLM from generating content unrelated to the intended goal. This is particularly true when the LLM's output is directly user-facing, such as a chatbot.</p>
                    <p>You're putting a lot of effort into creating test suites to validate generative AI outputs for a wide variety of prompts, but there's no clear and established way to test or monitor the responses. Most of the evaluation work is manual. Many developers are new to handling non-deterministic outputs. As a community, we haven't yet built systems which work well with them.</p>
                    <p>The cost of running a generative AI model is also an important concern, and developers are carefully evaluating the cost against the benefits for their users.</p>
                </div>
                <h4 className="text-5">Standard versus customized models</h4>
                <div className="flex flex-col gap-3">
                    <p>Most commonly, the developers we spoke to tended to rely on ready-made models and APIs. This optimizes the time-to-market and the use of engineering time and knowledge, which were limited.</p>
                    <p>While developers are aware of and see potential value in advanced techniques, such as Retrieve Augment-Generate (RAG) and fine-tuning, you'd rather focus on the web development aspect of their work. Ultimately, you prefer to use the default tools or rely on other teams to produce optimized models for their use cases.</p>
                </div>
                <h4 className="text-5">Privacy and security concerns</h4>
                <div className="flex flex-col gap-3">
                    <p>Privacy and security were the top concerns, especially for verticals with strict data requirements, such as the medical industry. On-device AI may be key to address those use cases, but this area remains largely unexplored.</p>
                    <p>Exposing user data to more third-parties with cloud APIs is a concern, and a number of developers see the value of on-device machine learning or generative AI to mitigate potential privacy and security pitfalls.</p>
                </div>
                <h4 className="text-6">AI for web developers</h4>
                <div className="flex flex-col gap-3">
                    <p>AI is everywhere and evolving at an incredible pace. How can we stay up to date, incorporate existing tools and models, or work with ML engineers to produce new models that best suit our needs?</p>
                    <p>Based on what we learned from you, we're working on guidance on AI for web developers. We aim to help you understand AI concepts on a high level, discover opportunities to use generative AI for productivity gains, and use AI to build delightful user experiences, using existing tools, models, and APIs. Continue to check back in as we publish more content in our AI collection.</p>
                    <p>While most web developers prefer to keep their focus on doing what they do best (that's web development!), we encourage those of you who want to dive deeper to build the tools, models, and APIs web developers need. We want to hear from you and learn how we can help you be successful.</p>
                    <p>AI is a fast-moving area. So, we'll continue engaging with the community as things change, running more conversations and surveys. If you'd like to discuss with us, schedule office hours with our team.</p>
                </div>
            </>
        )
    },
    {
        id: 2,
        author: 'Jecelyn Yeen',
        authorImage: '/assets/images/blog/authors/jecelynyeen.jpg',
        authorBio: 'Jecelyn is a versatile web developer known for her ability to seamlessly blend creativity with technical proficiency. With a background in both front-end and back-end development, she possesses a holistic understanding of the web development process. ',
        category: 'Introduction',
        title: 'Community highlight: Ramona Schwering',
        image: '/assets/images/blog/latest-2.jpg',
        heading: 'Ramona Schwering is a software engineer and Google Developer Expert with background in quality assurance.',
        tags: ['Introduction', 'Journal'],
        recent: true,
        content: (
            <>
                <p>Ramona Schwering is a software engineer with a background in quality assurance. She is also a Google Developer Expert in web technologies. Ramona is passionate about test automation. She has made significant contributions to test automation through her public education efforts, which include speaking at conferences, publishing articles, contributing to open-source projects, and organizing meetups.</p>
                <div className="flex flex-col gap-3">
                    <p>
                        <b>Jecelyn:</b>&nbsp;
                        What was your route into web development and testing?
                    </p>
                    <p>
                        <b>Ramona:</b>&nbsp;
                        My journey towards development began through my love for art: In high school, I spent a lot of time drawing and creating illustrations I wanted to publish. However, I wanted to use something other than DeviantArt and Animexx, so I created my own website. This led me to learn about web development. Later on, I developed a passion for test automation during my first job. I wanted to eliminate the mundane testing tasks so that I could focus on tasks that required human creativity and experience.
                    </p>
                    <p>
                        <b>Jecelyn:</b>&nbsp;
                        There are so many test automation tools. How can one learn them all or know which to choose?
                    </p>
                    <p>
                        <b>Ramona:</b>&nbsp;
                        This is a really good question. First things first: Although it's certainly good to play around with many automation frameworks, don't feel pressured to learn each and every one. Start with building small projects or write a first small test to see if you like the experience and quirks of a framework. It's fine to decide on one or two that match your requirements and are to your liking. I prefer choosing by trying out and seeing if I like the developer experience of a certain framework. I try to find out if it feels flawless to use. Remember, testing should feel like a habit, not claiming any headspace. And, of course, it depends on the project you build and its requirements.
                    </p>
                    <p>
                        <b>Jecelyn:</b>&nbsp;
                        Testing is often delayed until the end of the process, like, "Oh we don't have time for that yet." What's your take on that?
                    </p>
                    <p>
                        <b>Ramona:</b>&nbsp;
                        Writing tests takes time for sure, especially if you decide to use Test-Driven-Development. However, I guess it's a common misconception that testing eats up A LOT of time: I would consider it an investment that has many advantages: You get early feedback, and thus you can fix bugs earlier, leading to lower costs of bug fixing because bugs don't accumulate and won't get more expensive to fix at a later stage. Apart from that, the more you automate, the less you need to test manually but you still get a great overview of the status of your project. So, in my opinion, it's actually the opposite—tests will save you time and give you confidence without constant effort.
                    </p>
                    <p>
                        <b>Jecelyn:</b>&nbsp;
                        Tell me about the culture of test automation at your company.
                    </p>
                    <p>
                        <b>Ramona:</b>&nbsp;
                        In my current team, testing is considered a shared responsibility—everyone owns it together. We implemented a process called "Quality at Speed," which was originally introduced by Atlassian. This process ensures that testers only act as a safety net, deciding whether a pull request requires testing or not. Therefore, developers cannot rely on the idea that the tester will take care of everything. Instead, developers and testers work together with the help of quality engineers who act as coaches and teach developers how to test. Developers write the necessary tests for their changes, and if quality engineers think it's necessary, they will complement those tests later on. This approach increased empathy between developers and quality engineers and allowed them to work together while sharing the responsibility.
                    </p>
                    <p>
                        <b>Jecelyn:</b>&nbsp;
                        You are participating in so many community activities like speaking, writing, and contributing to open source! How do you find time and balance that?
                    </p>
                    <p>
                        <b>Ramona:</b>&nbsp;
                        I feel fortunate that my employer supports my public speaking engagements, which means I don't have to take days off from work when attending conferences or preparing content for talks. However, I must admit that I still use some of my free time for public learning. To manage my time effectively, I've adopted a time-boxing strategy where I dedicate, let's say,two hours each day to, for example, contributing to open source projects, writing my articles, or rehearsing my presentations. It's crucial to take a break for the day after these two hours to have enough leisure time. Although there are times when this approach doesn't work out as planned, generally, it has helped me strike a good balance between my work, my community engagement, and personal life without neglecting any important tasks.
                    </p>
                    <p>
                        <b>Jecelyn:</b>&nbsp;
                        Is there any advice that you wish you had heard before you started working in test automation?
                    </p>
                    <p>
                        <b>Ramona:</b>&nbsp;
                        It's important not to become too biased towards a particular solution framework and prioritize it over solving the actual problems at hand. Our ultimate goal is to provide the best quality and user experience for our users, and any framework can help us achieve that. Therefore, it's best not to engage in framework wars. At the very beginning of your testing career, I'd advise you to start by learning the fundamentals of testing and test automation, and only use frameworks as tools when necessary.
                    </p>
                    <p>
                        <b>Jecelyn:</b>&nbsp;
                        How do you manage to keep up with test automation and web development?
                    </p>
                    <p>
                        <b>Ramona:</b>&nbsp;
                        I enjoy keeping up with the latest trends and innovative ideas by monitoring news sources and social media. However, filtering out relevant information can be difficult, so I make sure to follow reliable sources and individuals. I also consolidate my sources by using features such as Twitter lists and bookmarks. Here is one of the list of sources I followed. Attending conferences and meetups is another way I stay informed, as I can learn from talks and engage in conversations with other attendees.
                    </p>
                </div>
            </>
        )
    },
    {
        id: 3,
        author: 'Rachel Andrew',
        authorImage: '/assets/images/blog/authors/rachelandrew.jpg',
        authorBio: 'Rachel is a passionate web developer with over 5 years of experience crafting immersive digital experiences. His expertise lies in front-end development, where he combines his eye for design with his technical skills to create visually stunning and highly functional websites.',
        category: 'Frontend',
        title: 'A definition update for Baseline',
        image: '/assets/images/blog/latest-3.png',
        heading: 'The definition of Baseline has changed. Find out why we made the change, and what it means for Baseline.',
        tags: ['HTML', 'Javascript'],
        recent: true,
        content: (
            <>
                <p>At Google I/O this year we introduced Baseline, with the aim of creating a line in the sand indicating whether web platform features were ready for you to use. This post explains how the definition has evolved—with the help of the feedback we received from the community and the work of the WebDX Community Group.</p> 
                <h4 className="text-6">What has changed?</h4>
                <div className="flex flex-col gap-3">
                    <p>The original definition of Baseline was that features become part of Baseline when they are supported in the current and previous version of all major browsers—Chrome, Edge, Firefox, and Safari.</p>
                    <p>In discussions with the community we learned that there were two noteworthy points in the lifecycle of a feature on the web platform:</p>
                    <ul className="list-disc ml-6">
                        <li>The moment the feature becomes interoperable, available across all major engines.</li>
                        <li>The point at which most sites can safely implement that feature, without needing to worry about support.</li>
                    </ul>
                    <p>The first of these stages is very simple to define, we know when a feature becomes available in all major engines. Here on web.dev we often celebrate these moments.</p>
                    <p>The second stage is much harder to define. Depending on the audience for a site or application you may be happy to start using features very soon after they become interoperable, or you may need to wait a period of years for enough of your users to have upgraded to browser versions that support these features.</p>
                    <p>To provide oversight for Baseline, the WebDX Community Group—which includes representatives from all major browser vendors—formed a governance group for the Web Features project. After much discussion from the whole group, the governance group redefined Baseline to reflect the two key points in the timeline of a feature.</p>
                    <ul className="list-disc ml-6">
                        <li><b>Newly available:</b> An item is newly available in Baseline when it becomes interoperable across the main browsers.</li>
                        <li><b>Widely available:</b> The point at which the feature is generally safe to use. This line is set at 30 months after the newly available point.</li>
                    </ul>
                    <p>We have also expanded the core browser set to explicitly include mobile versions of those browsers. This means that a feature won't be classed as newly available until it is available in:</p>
                    <ul className="list-disc ml-6">
                        <li>Safari (macOS and iOS)</li>
                        <li>Firefox (Desktop and Android)</li>
                        <li>Chrome (Desktop and Android)</li>
                        <li>Edge (Desktop)</li>
                    </ul>
                    <p>We know this widely available line can never be accurate for everyone. However, when looking into the available data on adoption of browser versions we learned that for most features it takes no more than 30 months for them to be available to about 95% of users globally. You may feel happy to use features much earlier than this, but it is unlikely that you will be unable to use a feature after this period of 30 months from interoperability.</p>
                    <p>Your own line in the sand may be between newly available and widely available. At the very least, the newly available point is an excellent signal that this feature is something you might want to start learning. That way you'll be ready to use it in production when it becomes more widely available.</p>
                </div>
                <h4 className="text-6">What's next for Baseline?</h4>
                <div className="flex flex-col gap-3">
                    <p>To realize our goal to have the Baseline status displayed on MDN and other properties, we need to map all of the features of the web platform in the Web Features dataset. This work is still ongoing and we expect to be complete during 2024.</p>
                    <p>MDN has also announced this change to Baseline today. You can read the post about Baseline's evolution on MDN on the MDN blog, and see examples of the new Baseline badge being rolled out across MDN pages.</p>
                    <p>We also intend to start to implement a badge indicating Baseline status on web.dev and developer.chrome.com.</p>
                </div>
            </>
        )
    },
    {
        id: 4,
        author: 'Jeremy Wagner',
        authorImage: '/assets/images/blog/authoimgrs/jlwagner.jpg',
        authorBio: 'Jeremy is a seasoned AI expert known for her ability to harness the power of data to drive strategic decision-making. With a background in mathematics and statistics, she specializes in developing machine learning algorithms and predictive models that uncover actionable insights from complex datasets.',
        category: 'AI',
        title: 'Start using ChatGPT instantly',
        image: '/assets/images/blog/extra-blogs/blog-4.png',
        heading: 'We\'re making it easier for people to experience the benefits of AI without needing to sign up',
        tags: ['AI', 'Machine Learning', 'ChatGPT'],
        content: (
            <>
                <p>It's core to our mission to make tools like ChatGPT broadly available so that people can experience the benefits of AI. More than 100 million people across 185 countries use ChatGPT weekly to learn something new, find creative inspiration, and get answers to their questions. Starting today, you can use ChatGPT instantly, without needing to sign-up. We're rolling this out gradually, with the aim to make AI accessible to anyone curious about its capabilities.</p>
                <img src="/assets/images/blog/Comp_NoAuth_328.gif" />
                <p>We may use what you provide to ChatGPT to improve our models for everyone. If you’d like, you can turn this off through your Settings - whether you create an account or not. Learn more about how we use content to train our models and your choices in our Help Center.</p>
                <img src="/assets/images/blog/Comp_NoAuth_Gif2.gif" />
                <div className="flex flex-col gap-3">
                    <p>We’ve also introduced additional content safeguards for this experience, such as blocking prompts and generations in a wider range of categories.</p>
                    <p>There are many benefits to creating an account including the ability to save and review your chat history, share chats, and unlock additional features like voice conversations and custom instructions.</p>
                    <p>For anyone that has been curious about AI’s potential but didn’t want to go through the steps to set-up an account, start using ChatGPT today.</p>
                </div>
            </>
        )
    }
]