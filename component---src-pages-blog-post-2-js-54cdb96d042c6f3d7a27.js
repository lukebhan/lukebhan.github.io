"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[801],{5249:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(7294),a="header-module--header--e1d40",r="header-module--headerMenu--afd14",i="header-module--name--ee127",s="header-module--top--c0c51";function l(e){return o.createElement("div",{className:a},o.createElement("div",{className:s},o.createElement("a",{className:i,href:"../"},"Luke Bhan")),o.createElement("div",null,o.createElement("ul",{className:r},e.headerProps.map((e=>o.createElement("li",{className:r},o.createElement("a",{href:e.link},e.name)))))))}},1717:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var o=n(7294),a=n(5249),r=n(8460),i=n(8166);function s(){return o.createElement("div",{className:r.jZ},o.createElement(a.Z,{headerProps:[{link:"../../",name:"About"},{link:"../",name:"Blog"},{link:"../../publications",name:"Publications"}]}),o.createElement("div",{className:i.title},"Designing a Modern CS Curriculum"),o.createElement("div",{className:i.body},o.createElement("p",null,"How do we effectively teach computer science? It is not so simple. My university struggled to teach the fundamentals and omitted a majority of the implementations. However, I think this is mostly due to poor planning and a lack of effort. In this post, I will detail my gripes with computer science education using my experience at Vanderbilt and provide a set of alternate solutions I believe would enhance the current curriculum.")," ",o.createElement("p",null,"My experience learning computer science has been lackluster. Looking back, I would have majored in math. This is because the core of my programming skill has been developed outside of the classroom while I think mathematics requires the guidance of a professor in many more situations. For example, I believe that it is much harder to learn to become a good proof writer than a strong programmer. Partially, this is due to the open-source collaborative environment so readily available in the computer science atmosphere. For example, I can write code for an open-source Github project, get feedback from a senior engineer and ultimately refurbish my code in a matter of a few hours while it may take days to hear back from any stack exchange question for mathematics. This is an unbelievable advantage for computer science over other fields. Unfortunately, as a Vanderbilt student, I have been required to contribute to exactly 0 open source projects. Instead, my assignments revolved around filling in boilerplate code where a majority of the project is created for me. Furthermore, as a teaching assistant, it would devastate me to see many students go through the core CS classes and the first time they are exploring the terminal is as a third year. Additionally, we do not touch Github till the third course in the core sequence meaning if one wanted to contribute to an open-source project, they would not know how to do so until at least their sophomore year (Without learning it on their own). That absolutely disgusts me. So my point is that computer science curricula need to do three things: ",o.createElement("b",null," teach modern tools and barebone fundamentals, force students to contribute to open source projects for feedback and provide an environment where students are challenged.  ")),o.createElement("p",null,"Now that we have identified a set of goals, I would like to propose my version of a modern curriculum. Personally, I believe that students should understand a computer from the barebones and build upward. I would like to reference the curriculum developed by one of the best modern hackers, George Hotz. In summary, here are the main ideas of his curriculum:",o.createElement("li",{className:i.bullet},"Start with transistors and FPGAs. One should know some Verilog and understand how a transistor works on a high level. Make an LED flash."),o.createElement("li",{className:i.bullet},"How do we get a computer processor to work? Write an ARM (open source) processor using Verilog."),o.createElement("li",{className:i.bullet},"How does our code run in that processor? Write an assembler and a simple compiler."),o.createElement("li",{className:i.bullet},"Let’s build a real compiler. Rewrite the compiler using a functional language. Build out a linker and maybe even some more complex ideas such as malloc."),o.createElement("li",{className:i.bullet},"Now, we can run code. Let’s start to build some useful tools for the user. Write an OS, a standard library(libc), filesystem, and some basic commands (ls, cat, rm, touch, etc.)"),"And I think for the first two years, this is excellent. Fantastic in fact. For any of these components to work together, they need to be really well designed. That means the student will need to learn ",o.createElement("b",null," modern languages, version control, hardware interfacing, design patterns, data structures, functional and imperative programming, Linux commands, etc.")," In addition to practical skills, this will also provide students with an insight into the current tech stack and where new ideas can be built for the future of computing. Obviously, this is a challenging course load to undertake, but with the number of resources available, I believe it is feasible."),o.createElement("p",null,"Great, now we have built a strong core for our computer science curriculum. How do we start to specialize? Personally, my expertise is in machine learning and so I will build a track for that. When a student graduates with a machine learning specialization, they should be able to do two things: 1) Read modern machine learning papers and understand their techniques. 2) Implement those papers. From there, the student will be able to do almost anything in machine learning. To achieve this, I propose a series of 5 courses. The first is a pure statistics course. It has no programming, but to interpret modern ML papers, one better understand regression, support vector machines, neural networks, gradient descent as well as some deeper topics such as kernel reduction, Lipschitz bounds, and the universal function approximation theorem from a mathematical perspective. Concurrently, I believe students should take a barebones implementation course. This means implementing all the topics above starting from just NumPy and moving toward integrating popular libraries such as Torch or SciKit Learn. Next, we need to learn about modern GPUs. Like it or not, machine learning is about building models that can learn efficiently and so we should understand programming in CUDA, how matrix multiplication is computed, and ultimately why our model is fast or slow. Fourth, it is imperative to understand that neural network based approaches are the future. A modern machine learning expert should understand the hot approaches to vision, natural language processing, and robotics. Thus, they should be familiar with the ideas behind CNNs, transformers, and actor-critic algorithms. Thus, this fourth course should be titled, topics on neural network techniques and their implementations. Lastly, I would offer a final course to seniors that puts everything together. Every two weeks they look at a new top-tier paper in each domain and implement it to repeat the results. This will teach them model organization, tensorboard debugging, and of course, the patience required for training. Lastly, every project or assignment in this final course should be open source. Imagine how much better the ML community would be if there were 100 seniors every year verifying top-tier papers. (And think about the exposure those students would receive). That is all. 9 courses to create a machine learning expert. Now, obviously, those 9 courses are certainly challenging and require a great deal of work, but that is it."),o.createElement("p",null,"On a larger level, I would offer a series of tracks following this same idea repeated. One can develop the same track ideas for systems and programming languages, cybersecurity and reverse engineering, networks, web design, and even an “I want to get a job at Google” track for software engineers. The central themes would again be ",o.createElement("b",null,"open-sourced ideas and implementation of modern technologies "),"(Examples would be writing a web browser, or a scaled form of Ghidra depending on the course). From here, you have a strong computer science curriculum. It provides students with a core understanding of the tech stack and forces them to learn a majority of the modern paradigms. Then, it allows students to accurately specialize while maintaining their fundamentals. I do understand that this is a very challenging undertaking, but if the goal is to create the best CS students in the world, hard work is required. "),o.createElement("p",null,"That is all for this post. Please feel free to write me suggestions at luke.bhan@vanderbilt.edu or if you have any more things I missed, please feel free to let me know. ")))}},8166:function(e,t,n){n.r(t),n.d(t,{body:function(){return o},bold:function(){return a},bullet:function(){return r},color:function(){return i},enumerate:function(){return s},figCaption:function(){return l},italic:function(){return u},resize:function(){return c},sixList:function(){return d},sixResize1:function(){return m},sixResize2:function(){return h},sixResize3:function(){return g},text:function(){return f},tg:function(){return p},tgamwm:function(){return b},tgbaqh:function(){return w},title:function(){return y}});var o="blog-module--body--10cc4",a="blog-module--bold--7ec1a",r="blog-module--bullet--c7205",i="blog-module--color--e45d4",s="blog-module--enumerate--8cbab",l="blog-module--figCaption--157e1",u="blog-module--italic--6f3e4",c="blog-module--resize--fdd84",d="blog-module--sixList--64888",m="blog-module--sixResize1--440c1",h="blog-module--sixResize2--acaf4",g="blog-module--sixResize3--c4766",f="blog-module--text--41696",p="blog-module--tg--bdc78",b="blog-module--tgamwm--9d136",w="blog-module--tgbaqh--b0ba6",y="blog-module--title--a9eee"},8460:function(e,t,n){n.d(t,{Iy:function(){return s},QN:function(){return r},Yp:function(){return c},d1:function(){return i},fL:function(){return h},iN:function(){return a},jY:function(){return l},jZ:function(){return o},tW:function(){return d},tn:function(){return u},uF:function(){return m}});var o="index-module--about--5168c",a="index-module--blue--bbb6a",r="index-module--blueTop--d046a",i="index-module--body--1e255",s="index-module--firstLogo--4a572",l="index-module--logo--8d2a0",u="index-module--logoContainer--25319",c="index-module--logoImg--290be",d="index-module--portrait--817a4",m="index-module--scholarImg--82971",h="index-module--text--66842"}}]);
//# sourceMappingURL=component---src-pages-blog-post-2-js-54cdb96d042c6f3d7a27.js.map