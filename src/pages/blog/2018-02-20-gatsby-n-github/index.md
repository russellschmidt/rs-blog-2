---
path: "/blog/gatsby-github"
date: "2018-02-20T12:33:33.962Z"
title: "Gatsby'n'Githubby"
type: "blog"
---

I had forgotten a pretty messy issue with deploying to Github pages with Gatsby: if you run a `gatsby build` and then save to your github repo, you have just pushed all the production code into your life. Not only is your file huge, but you gain unreadable cruft at the expense of hot reloading. No bueno.

So you need to make sure you are pushing to two repos: dev and prod. Duh you scream, that is best practice anyway, and you would [probably recommend a staging site](http://guides.beanstalkapp.com/deployments/best-practices.html). True, but for a personal blog, coming from Rails and Jekyll, you wouldn't do this step as the framework can parse out which version you are running so you don't need separate repo buckets.

*So far I love Gatsby so much that I don't care.*

### Domain Registrar and DNS Settings
I use namecheap. Here are the settings I used on the Advanced DNS tab. Namecheap doesn't pay me but I've been happy with them. I've also been playing with Amazon's Route 53 which is a pretty robust set of DNS controls but we'll save that for another day.

![namecheap screenshot](https://s3.amazonaws.com/russell-personal/namecheap-ruslio.png)

So you point namecheap to your github repo, in this case I am using `russellschmidt.github.com`. Stir and wait 30 minutes for the internet to catch up.

### Github
I had a repo for my dev, now I need to set a repo for the production. In my case, this is blog v3.0 so I already had the repo sitting there waiting for me to abuse.

As per usual, I had at some point in the distant past set
`$ git remote add origin https://github.com/russellschmidt/whatevarepo.git`

Now those magic words mean something - origin is just a name for the repo that can be conveniently dropped off when running a command later if you ran `$ git push -u origin master` - you can just run `$ git push`.

Well let's ruin all of that.

`$ git remote add prod https://github.com/russellschmidt/russellschmidt.github.io.git`

Now run `$ git remote -v` and see if you get two repos. You should have two repos, each listed twice (once each for fetch and push respectively).
