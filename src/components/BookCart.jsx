import React from "react";
import { useEffect, useState } from "react";
import CartBook from "./CartBook";
import Product from "./Product";
import Navbar from "./Navbar";
//import Product from "./Product";
const Cart = () => {
  const [username, setUsername] = useState(null);
  const [items, setItems] = useState([]);
  const fetchCart = async (userId) => {
    const data = await fetch(
      `http://localhost:3006/api/cart/fetch?userId=${userId}`
    );
    const cart = await data.json();

    const Books = await Promise.all(cart.items.map(async (id) => {
        const Bk = await fetchBook(id);
        return Bk;
      })
    );
    setItems(Books);                              
  };

  const fetchBook = async (bookId) => {
    const data = await fetch(
      `http://localhost:3005/api/books/book?bookId=${bookId}`
    );
    const book = await data.json();
    return book;
  };
  useEffect(() => {
    const user = localStorage.getItem("username");
    setUsername(user);
    if (username !== undefined || "") fetchCart([username]);
    // eslint-disable-next-line
  },[username]);

  useEffect(() => {
    let json = [
      {
        _id: 15,
        title: "Team Foundation Server 2008 in Action",
        isbn: "1933988592",
        pageCount: 344,
        publishedDate: {
          $date: "2008-12-01T00:00:00.000-0800",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
        longDescription:
          "In complex software projects, managing the development process can be as critical to success as writing the code itself. A project may involve dozens of developers, managers, architects, testers, and customers, hundreds of builds, and thousands of opportunities to get off-track. To keep tabs on the people, tasks, and components of a medium- to large-scale project, most teams use a development system that allows for easy monitoring, follow-up, and accountability.    Microsoft Team Foundation Server 2008 (TFS), the server component of Microsoft's Visual Studio Team System (VSTS), provides a powerful collaborative platform for software-development teams. The product offers an integrated toolset for tracking work items, creating test cases, managing source code, generating builds, constructing database schemas, and so on. Because in software development one size does not fit all, TFS provides process customization, project management, and reporting capabilities to build solutions around your requirements.    Team Foundation Server 2008 in Action is a hands-on guide to Team Foundation Server 2008. Written for developers with a good handle on TFS basics, this book shows you how to solve real-life problems. It's not a repetition of Microsoft's product documentation. Team Foundation Server 2008 in Action is a practitioner's handbook for how to work with TFS under common constraints. This book walks you through real-life software engineering problems based on hundreds of hours of TFS experience.    You'll benefit from expert author Jamil Azher's extensive interactions with members of Microsoft's TFS team and MVPs, survey feedback from the author's blog, and interviews with organizations and user groups using TFS. Instead of just offering a high-level overview, the book provides detailed solutions for solving common   and not-so-common   problems using TFS. It discusses the strengths as well as weaknesses of TFS, and suggests appropriate problem resolution steps, workarounds, or custom solutions.",
        status: "PUBLISH",
        authors: ["Jamil Azher"],
        categories: ["Microsoft .NET"],
      },
      {
        _id: 33,
        title: "Hello! Python",
        isbn: "1935182080",
        pageCount: 350,
        publishedDate: {
          $date: "2012-02-13T00:00:00.000-0800",
        },
        thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/briggs.jpg",
        longDescription: "Learn Python the fast and fun way! Hello! Python is a fully-illustrated, project-driven tutorial designed to get you up and running with Python, no experience required. It's full of projects that help you learn the way most programmers do   one step at a time, starting with the basics, and then applying your new skills in useful programs.    Hello! Python fully covers the building blocks of Python programming and gives you a gentle introduction to more advanced topics such as object oriented programming, functional programming, network programming, and program design. New (or nearly new) programmers will learn most of what they need to know to start using Python immediately.    The book presents several practical projects, including games, business, and graphical applications. Each example provides a solid base for you to develop your own programs. As you dig into Python, you'll see how programs are created, and the reasons behind the technical decisions.    The book covers Python's large standard library gradually and in the context of sample apps, so the reader isn't overwhelmed with a large number of library functions to absorb all at once. Upon completing the book, the reader will have a good grasp of Python, know several technologies and libraries related to Python and be able to identify many resources for future growth as a programmer.",
        status: "PUBLISH",
        authors: ["Anthony Briggs"],
        categories: ["Python"],
      },
      {
        _id: 16,
        title: "Brownfield Application Development in .NET",
        isbn: "1933988711",
        pageCount: 550,
        publishedDate: {
          $date: "2010-04-16T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
        shortDescription:
          "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.",
        longDescription:
          "It's easy to get excited about building a new software project from scratch. So-called \"greenfield\" projects often involve learning new technology and the opportunity for experimentation. Working on established software projects may seem less glamorous.    Most software developers have inherited a monolithic application where the day-to-day tasks involve maintenance, incremental improvements, or even cleaning up the mess another programmer left behind. These legacy or brownfield projects often have tightly coupled components, low cohesion, and poor separation of concerns, making them fragile and resistant to change.    Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.    Starting with the build process and the introduction of unit tests, the authors show you how to set up the application so that in later chapters, you can make incremental changes aimed at decoupling components from each other. Each practice introduced will increase your confidence and ability to make subsequent changes to your code.    As the book proceeds, the authors introduce frameworks and tools commonly used today while still approaching the subject from a conceptual level so that you can substitute alternate tools as appropriate. This book examines the reasons why a tool is necessary, not the tool itself. Because the book is based on the authors' experiences, Brownfield Application Development in .Net moves beyond the theories and shows you the techniques you need to be successful.",
        status: "PUBLISH",
        authors: ["Kyle Baley", "Donald Belcham"],
        categories: ["Microsoft"],
      },
      {
        _id: 17,
        title: "MongoDB in Action",
        isbn: "1935182870",
        pageCount: 0,
        publishedDate: {
          $date: "2011-12-12T00:00:00.000-0800",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
        shortDescription:
          "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.",
        longDescription:
          "MongoDB is a document-oriented database that's highly scalable and delivers very high-performance, especially with massive data sets that need to be spread across multiple servers. It blends the things you expect with any database   like indexing, querying, and high availability   with powerful new features like easy horizontal scaling (\"auto-sharding\"), map/reduce aggregation, and a flexible document data model to support dynamic schemas.    MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.    Along the way, all of MongoDB's major features are covered, including:        * Indexes and explain plans for efficient queries      * Atomic operations for managing simple data structures and manipulating complex, rich documents      * GridFS for storing and managing large binary objects (images, videos, etc.) in MongoDB      * Map-reduce for custom aggregations and reporting      * Master-slave replication and replica sets for automated failover      * Auto-sharding for automated horizontal scaling    The handy reference section on schema design patterns will help ease the transition from the relational data model of SQL to MongoDB's document-based data model. The numerous, detailed examples are implemented in Ruby and include comprehensive explanations.    MongoDB has been gaining traction in the developer community for its speed, flexibility, scalability, and ease of use. With production deployments that include SourceForge, Foursquare, and Shutterfly, MongoDB is proving to be a robust and reliable database system that keeps developers happy. Covering everything from installation to application design to deployment, MongoDB In Action is written for the application developer who wants to take advantage of MongoDB and get up and running quickly.",
        status: "PUBLISH",
        authors: ["Kyle Banker"],
        categories: ["Next Generation Databases"],
      },
      {
        _id: 18,
        title: "Distributed Application Development with PowerBuilder 6.0",
        isbn: "1884777686",
        pageCount: 504,
        publishedDate: {
          $date: "1998-06-01T00:00:00.000-0700",
        },
        longDescription:
          "Distributed Application Development with PowerBuilder 6.0 is a vital source for the PowerBuilder programmer; it provides the sort of detailed coverage of Distributed PowerBuilder that you can find nowwhere else.    The book opens with a discussion of distributed computing in general, as well as its design principles and technologies. Then Distributed PowerBuilder is examined in detail. By building a simple application step by step, the author discusses all of the concepts and components needed for building a PowerBuilder application and shows how to make the application available over a network.    Finally, the author explores how PowerBuilder can be used in distributed solutions both with and without using DPB.    Distributed Application Development with PowerBuilder 6.0 is for any PowerBuilder developer looking for information on distributed computing options with the PowerBuilder environment. IS managers, system architects, and developers using many different technologies can learn how PowerBuilder can be used as all or part of the solution for building distributed applications.    The main topic of this book is Distributed PowerBuilder (DPB). It covers the basics of building a DPB application and walks through each new feature with examples including the Shared object, DataWindow synchronization, Server Push and Web.PB. It also explains distributed computing technologies and design principles so that your application can be built to handle the stresses of a distributed environment.  ",
        status: "PUBLISH",
        authors: ["Michael J. Barlotta"],
        categories: ["PowerBuilder"],
      },
      {
        _id: 19,
        title: "Jaguar Development with PowerBuilder 7",
        isbn: "1884777864",
        pageCount: 550,
        publishedDate: {
          $date: "1999-08-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
        shortDescription:
          "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.",
        longDescription:
          "Jaguar Development with PowerBuilder 7 is the definitive guide to distributed application development with PowerBuilder. It is the only book dedicated to preparing PowerBuilder developers for Jaguar applications and has been approved by Sybase engineers and product specialists who build the tools described in the book.    Jaguar Development with PowerBuilder 7 focuses on getting you up to speed on Jaguar and PowerBuilder, and it is packed with code samples to guide you every step of the way. It covers each step involved in application development, from setting up the development environment to deploying a production application.    Even a PowerBuilder developer with no experience in distributed technologies or Jaguar CTS will learn what it takes to build an application. Jaguar Development with PowerBuilder 7 covers:    Developing Component-centric Applications  Building Jaguar CTS Components/Clients  CORBA  Adaptive SQL Anywhere  Adaptive Server Enterprise  and lots more!",
        status: "PUBLISH",
        authors: ["Michael Barlotta"],
        categories: ["PowerBuilder", "Client-Server"],
      },
      {
        _id: 20,
        title: "Taming Jaguar",
        isbn: "1884777686",
        pageCount: 362,
        publishedDate: {
          $date: "2000-07-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
        longDescription:
          "Taming Jaguar is part of the PowerBuilder Developer's series, which includes Distributed Application Development with PowerBuilder 6 and Jaguar Development with PowerBuilder 7.    An application server is the heart of your enterprise computing architecture, centralizing your web content, business logic, and access to your data and legacy applications. Sybase's application server, Jaguar CTS, delivers performance, scalability, and flexibility running CORBA , COM, Java/EJB, C++, and PowerBuilder components.    If you are looking to adopt Jaguar in your enterprise, look no further. Taming Jaguar shows you how to solve the real-world problems of installing, trouble-shooting, designing, developing, and maintaining a Jaguar application. Topical chapters are organized in a Q & A format making it easy for you to quickly find the solution to your problem. They also provide foundational and background information as well as detailed technical how-tos.    Although designed so you can find your problems easily, this book is meant to be read cover-to-cover with each chapter discussing its topic exhaustively.    What's inside:    J2EE development  Java Servlets  Jaguar administration & code balancing  EJBs  Web development with PowerDynamo  Advanced component design ",
        status: "PUBLISH",
        authors: ["Michael J. Barlotta", "Jason R. Weiss"],
        categories: ["PowerBuilder"],
      },
      {
        _id: 21,
        title: "3D User Interfaces with Java 3D",
        isbn: "1884777902",
        pageCount: 520,
        publishedDate: {
          $date: "2000-08-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://m.media-amazon.com/images/I/41gXt86WBXL._AC_UF1000,1000_QL80_.jpg",
        longDescription:
          '3D User Interfaces with Java 3D is a practical guide for providing next-generation applications with 3D user interfaces for manipulation of in-scene objects. Emphasis is on standalone and web-based business applications, such as for online sales and mass customization, but much of what this book offers has broad applicability to 3D user interfaces in other pursuits such as scientific visualization and gaming.  This book provides an extensive conceptual framework for 3D user interface techniques, and an in-depth introduction to user interface support in the Java 3D API, including such topics as picking, collision, and drag-and-drop. Many of the techniques are demonstrated in a Java 3D software framework included with the book, which also provides developers with many general-purpose building blocks for constructing their own user interfaces.    Applications and their use of 3D are approached realistically. The book is geared towards sophisticated user interfaces for the "everyday user" who doesn\'t have a lot of time to learn another application--much less a complicated one--and an everyday computer system without exotic devices like head mounted displays and data gloves. Perhaps the best description of this book is: "A roadmap from Java 3D to \'Swing 3D\'."',
        status: "PUBLISH",
        authors: ["Jon Barrilleaux"],
        categories: ["Java", "Computer Graphics"],
      },
      {
        _id: 22,
        title: "Hibernate in Action",
        isbn: "193239415X",
        pageCount: 400,
        publishedDate: {
          $date: "2004-08-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer.jpg",
        shortDescription: '"2005 Best Java Book!" -- Java Developer\'s Journal',
        longDescription:
          "Hibernate practically exploded on the Java scene. Why is this open-source tool so popular  Because it automates a tedious task: persisting your Java objects to a relational database. The inevitable mismatch between your object-oriented code and the relational database requires you to write code that maps one to the other. This code is often complex, tedious and costly to develop. Hibernate does the mapping for you.    Not only that, Hibernate makes it easy. Positioned as a layer between your application and your database, Hibernate takes care of loading and saving of objects. Hibernate applications are cheaper, more portable, and more resilient to change. And they perform better than anything you are likely to develop yourself.    Hibernate in Action carefully explains the concepts you need, then gets you going. It builds on a single example to show you how to use Hibernate in practice, how to deal with concurrency and transactions, how to efficiently retrieve objects and use caching.    The authors created Hibernate and they field questions from the Hibernate community every day - they know how to make Hibernate sing. Knowledge and insight seep out of every pore of this book.",
        status: "PUBLISH",
        authors: ["Christian Bauer", "Gavin King"],
        categories: ["Java"],
      },
      {
        _id: 23,
        title: "Hibernate in Action (Chinese Edition)",
        pageCount: 400,
        publishedDate: {
          $date: "1999-06-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg",
        status: "PUBLISH",
        authors: ["Christian Bauer", "Gavin King"],
        categories: ["Java"],
      },
      {
        _id: 24,
        title: "Java Persistence with Hibernate",
        isbn: "1932394885",
        pageCount: 880,
        publishedDate: {
          $date: "2006-11-01T00:00:00.000-0800",
        },
        thumbnailUrl:
          "https://m.media-amazon.com/images/I/41gXt86WBXL._AC_UF1000,1000_QL80_.jpg",
        shortDescription:
          '"...this book is the ultimate solution. If you are going to use Hibernate in your application, you have no other choice, go rush to the store and get this book." --JavaLobby',
        longDescription:
          "Persistence -- the ability of data to outlive an instance of a program -- is central to modern applications. Hibernate, the most popular Java persistence tool, provides automatic and transparent object/relational mapping so it's a snap to work with SQL databases in Java applications. Hibernate conforms to the new EJB 3.0 and Java Persistence 1.0 standards.    Java Persistence with Hibernate explores Hibernate by developing an application that ties together hundreds of individual examples. You'll immediately dig into the rich programming model of Hibernate 3.2 and Java Persistence, working through queries, fetching strategies, caching, transactions, conversations, and more. You'll also appreciate the well-illustrated discussion of best practices in database design, object/relational mapping, and optimization techniques.    In this revised edition of Manning's bestselling Hibernate in Action, authors Christian Bauer and Gavin King -- the founder of the Hibernate project -- cover Hibernate 3.2 in detail along with the EJB 3.0 and Java Persistence 1.0 standards.",
        status: "PUBLISH",
        authors: ["Christian Bauer", "Gavin King"],
        categories: ["Java"],
      },
      {
        _id: 25,
        title: "JSTL in Action",
        isbn: "1930110529",
        pageCount: 480,
        publishedDate: {
          $date: "2002-07-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bayern.jpg",
        longDescription:
          "JSTL is an important simplification of the Java web platform. With JSTL, page authors can now write dynamic pages using standard HTML-like tags and an easy-to-learn expression language. JSTL is a standard from the Java Community Process, and its expression language will become part of JSP 2.0.    JSTL in Action shows you how to write rich, dynamic web pages without programming. From simple loops to tricky XML processing, every feature of JSTL is covered and exercised in numerous useful examples. Whether you are a novice page author or an experienced Java programmer, this book shows you easy ways to create powerful web sites.    To help readers who don't already have a JSP container run the examples in the book, there's a free companion download here. This bundle contains a ready-to-run JSP container, a JSTL implementation, and all the book's examples.",
        status: "PUBLISH",
        authors: ["Shawn Bayern"],
        categories: ["Internet"],
      },
      {
        _id: 26,
        title: "iBATIS in Action",
        isbn: "1932394826",
        pageCount: 384,
        publishedDate: {
          $date: "2007-01-01T00:00:00.000-0800",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg",
        shortDescription:
          "   Gets new users going and gives experienced users in-depth coverage of advanced features.       Jeff Cunningham, The Weather Channel Interactive",
        longDescription:
          "Unlike some complex and invasive persistence solutions, iBATIS keeps O/RM clean and simple. It is an elegant persistence framework that maps classes to SQL statements and keeps the learning curve flat. The iBATIS approach makes apps easy to code, test, and deploy. You write regular SQL and iBATIS gives you standard objects for persistence and retrieval. There   s no need to change existing database schemas   iBATIS is tolerant of legacy databases (even badly designed ones).    iBATIS in Action is a comprehensive tutorial on the framework and an introduction to the iBATIS philosophy. Clinton Begin and coauthors lead you through the core features, including configuration, statements, and transactions. Because you   ll need more than the basics, it explores sophisticated topics like Dynamic SQL and data layer abstraction. You   ll also learn a useful skill: how to extend iBATIS itself. A complete, detailed example shows you how to put iBATIS to work. Topics are clearly organized and easily accessible for reference.",
        status: "PUBLISH",
        authors: ["Clinton Begin", "Brandon Goodin", "Larry Meadors"],
        categories: ["Web Development"],
      },
      {
        _id: 27,
        title: "Designing Hard Software",
        isbn: "133046192",
        pageCount: 350,
        publishedDate: {
          $date: "1997-02-01T00:00:00.000-0800",
        },
        shortDescription:
          '"This book is well written ... The author does not fear to be controversial. In doing so, he writes a coherent book." --Dr. Frank J. van der Linden, Phillips Research Laboratories',
        longDescription:
          'Have you ever heard, "I can\'t define a good design but I know one when I see it"  Designing Hard Software discusses ways to develop software system designs that have the same tangibility and visibility as designs for hard objects like buildings or computer hardware. It emphasizes steps called "essential tasks" which result in software specifications that show how each requirement, including robustness and extensibility, will be satisfied. All software developers and managers seeking to develop "hard" software will benefit from these ideas.    There are six essential tasks necessary for a good design:    User (run-time) requirements  Development sponsor (build-time) requirements  Domain information  Behavior identification and allocation  Behavior description  Software system architecture  Designing Hard Software goes beyond the standard software development methodologies such as those by Booch, Rumbaugh, Yourdon, and others, by providing techniques for a complete system architecture as well as explicit measures of the goodness of design. So, "you define a good design."',
        status: "PUBLISH",
        authors: ["Douglas W. Bennett"],
        categories: ["Object-Oriented Programming", "S"],
      },
      {
        _id: 28,
        title: "Hibernate Search in Action",
        isbn: "1933988649",
        pageCount: 488,
        publishedDate: {
          $date: "2008-12-21T00:00:00.000-0800",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg",
        shortDescription:
          '"A great resource for true database independent full text search." --Aaron Walker, base2Services',
        longDescription:
          "Good search capability is one of the primary demands of a business application. Engines like Lucene provide a great starting point, but with complex applications it can be tricky to implement. It's tough to keep the index up to date, deal with the mismatch between the index structure and the domain model, handle querying conflicts, and so on.    Hibernate Search is an enterprise search tool based on Hibernate Core and Apache Lucene. It provides full text search capabilities for Hibernate-based applications without the infrastructural code required by other search engines. With this free, open-source technology, you can quickly add high-powered search features in an intelligent, maintainable way.    Hibernate Search in Action is a practical, example-oriented guide for Java developers with some background in Hibernate Core. As the first book to cover Hibernate Search, it guides you through every step to set up full text search functionality in your Java applications. The book also introduces core search techniques and reviews the relevant parts of Lucene, in particular the query capabilities.    Hibernate Search in Action also provides a pragmatic, how-to exploration of more advanced topics such as Search clustering. For anyone using Hibernate or JBoss Seam, this book is the definitive guide on how to add or enhance search features in their applications.",
        status: "PUBLISH",
        authors: ["Emmanuel Bernard", "John Griffin"],
        categories: ["Java"],
      },
      {
        _id: 29,
        title: "jQuery in Action",
        isbn: "1933988355",
        pageCount: 376,
        publishedDate: {
          $date: "2008-01-01T00:00:00.000-0800",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault.jpg",
        shortDescription:
          '"The best-thought-out and researched piece of literature on the jQuery library." --From the forward by John Resig, Creator of jQuery',
        longDescription:
          "A really good web development framework anticipates your needs. jQuery does more   it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique    chaining    model lets you perform multiple operations on a page element in succession, as in  (   div.elements   ).addClass(   myClass   ).load(   ajax_url   ).fadeIn()    jQuery in Action is a fast-paced introduction and guide. It shows you how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book's unique    lab pages    anchor the explanation of each new concept in a practical example. You'll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.",
        status: "PUBLISH",
        authors: ["Bear Bibeault", "Yehuda Katz"],
        categories: ["Web Development"],
      },
      {
        _id: 30,
        title: "jQuery in Action, Second Edition",
        isbn: "1935182323",
        pageCount: 488,
        publishedDate: {
          $date: "2010-06-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault2.jpg",
        shortDescription:
          "jQuery in Action, Second Edition is a fast-paced introduction to jQuery that will take your JavaScript programming to the next level. An in-depth rewrite of the bestselling first edition, this edition provides deep and practical coverage of the latest jQuery and jQuery UI releases. The book's unique \"lab pages\" anchor the explanation of each new concept in a practical example. You'll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. This comprehensive guide also teaches you how jQuery interacts with other tools and frameworks and how to build jQuery plugins. ",
        longDescription:
          'A really good web development framework anticipates your needs. jQuery does more   it practically reads your mind. Developers fall in love with this JavaScript library the moment they see 20 lines of code reduced to three. jQuery is concise and readable. Its unique "chaining" model lets you perform multiple operations on a page element in succession. And with version 1.4, there\'s even more to love about jQuery, including new effects and events, usability improvements, and more testing options.    jQuery in Action, Second Edition is a fast-paced introduction and guide. Building on the bestselling first edition, it adds new examples, more labs, and deeper explanations of important features. You   ll learn how to traverse HTML documents, handle events, perform animations, and add Ajax to your web pages. The book\'s unique "lab pages" anchor the explanation of each new concept in a practical example. You\'ll learn how jQuery interacts with other tools and frameworks and how to build jQuery plugins. This book requires a modest knowledge of JavaScript and Ajax.',
        status: "PUBLISH",
        authors: ["Bear Bibeault", "Yehuda Katz"],
        categories: ["Java"],
      },
      {
        _id: 31,
        title: "Building Secure and Reliable Network Applications",
        isbn: "1884777295",
        pageCount: 591,
        publishedDate: {
          $date: "1996-01-01T00:00:00.000-0800",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
        shortDescription:
          '"... tackles the difficult problem of building reliable distributed computing systems in a way that not only presents the principles but also describes proven practical solutions." --John Warne, BNR Europe',
        longDescription:
          'As the "network is the computer" slogan becomes reality so reliability and security of networked applications become more important. Not only are hospitals, air traffic control systems, and telephone networks becoming more networked, but business applications are increasingly based on the open world of the Internet. Stability in the face of minor accidents, software or hardware failures, or outright attack has become vital. This book provides a structured approach to the technologies currently available for building reliable solutions to these problems.    Building Secure and Reliable Network Applications reviews the most important network technologies from a security and reliability perspective and discusses the most effective solutions with an eye towards their application to real-world systems. Any computing professional who works with networked software will find this book valuable in understanding security and reliability vulnerabilities and how to address them.',
        status: "PUBLISH",
        authors: ["Kenneth P. Birman"],
        categories: ["Networking", "Theory"],
      },
      {
        _id: 32,
        title: "Ruby for Rails",
        isbn: "1932394699",
        pageCount: 532,
        publishedDate: {
          $date: "2006-05-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
        shortDescription:
          "The word is out: with Ruby on Rails you can build powerful Web applications easily and quickly! And just like the Rails framework itself, Rails applications are Ruby programs. That means you can   t tap into the full power of Rails unless you master the Ruby language.",
        longDescription:
          "Ruby for Rails helps Rails developers achieve Ruby mastery. Each chapter deepens your Ruby knowledge and shows you how it connects to Rails. You   ll gain confidence working with objects and classes and learn how to leverage Ruby   s elegant, expressive syntax for Rails application power. And you'll become a better Rails developer through a deep understanding of the design of Rails itself and how to take advantage of it.    Newcomers to Ruby will find a Rails-oriented Ruby introduction that   s easy to read and that includes dynamic programming techniques, an exploration of Ruby objects, classes, and data structures, and many neat examples of Ruby and Rails code in action.    Ruby for Rails: the Ruby guide for Rails developers!",
        status: "PUBLISH",
        authors: ["David A. Black"],
        categories: ["Web Development"],
      },
    ];

    const newArray = json.map((i) => {
      return Object.assign(
        {
          price: Math.floor(Math.random() * 16) + 6,
        },
        i
      );
    });
    console.log(newArray);
  });  

  return (
    <>
      <div>
        <Navbar />
        <div className="w-10/12" style={{ width: "90%", margin: "0 auto" }}>
          {items.map((book) => {
            return (<CartBook book={book} />)
          })}
        </div>
        <Product/>
      </div>
    </>
  );
}
export default Cart;
