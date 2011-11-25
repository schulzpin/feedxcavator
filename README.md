# feedxcavator

Feedxcavator is a HTML to RSS conversion application written entirely in Clojure 
and ClojureScript. It uses a limited set of CSS selectors to extract content 
of HTML pages and convert them to RSS feeds. You may find it useful if a web 
page does not provide RSS and you are able to analyze the source code of that 
page to write selectors for the data you interested in 
([Firebug](http://getfirebug.com) or your browser development extensions may 
greatly aid on this, although they not always map page source precisely).


### Supported CSS Subset

Only the following CSS capabilities are supported by __feedxcavator__ CSS 
selectors:

<pre>
* Elements:                     div
* IDs:                          div#some-id
* Classes:                      div.some-class
* Descendants:                  h1 a
* Direct hierarchy:             div#some-id > h1.some-class > a
* Attribute check:              a[attr]
* Attribute value:              a[attr="value"]
* Attribute substring:          a[attr*="substr"]
* Pseudo-classes:               h1:first-child
* Parameterized pseudo-classes: a:nth-of-type(3)
</pre>

__feedxcavator__ uses [enlive](https://github.com/cgrand/enlive#readme)
library for HTML processing and internally converts all the CSS selectors into
[enlive selectors](http://enlive.cgrand.net/syntax.html).
The conversion routine is very straightforward and not so intelligent, so it's 
better to use enlive selectors in complex cases if css selectors do not work. 
Although, it should successfully deal with relatively simple hierarchical 
selectors, which should be enough in the majority of cases.
__feedxcavator__ will assume that elnive selectors are used if the selector 
string is wrapped in square brackets (e.g. [:div#some-id :> :h1.some-class 
:> :a]) and will not try to convert them.

### Usage

You may use, share or edit your feeds with the links provided by the 
[public deployment on GAE](http://feedxcavator.appspot.com) after the feed 
creation. Feed manager is available only on private deployments.

__Note:__ If you use a feed created by __feedxcavator__ with
[Feedly](http://feedly.com) and you are the only subscriber, you will 
get feed updates once per 3 hours or so, because this is the Google
feed fetcher interval for feeds with a single subscriber. 
If the target resource has been updated but the feed in Feedly hasn't, you 
need to manually update it in Google Reader to get the update in Feedly.

### Private Deployment

You may [install](http://code.google.com/appengine/docs/java/gettingstarted/uploading.html) 
a private [instance](https://github.com/GChristensen/feedxcavator/downloads)
of the application on your GAE account, and only the account owner will be able 
to create or manage feeds (but still will be able to share feed links). The only 
thing you need to do is to fill in application id in the 'appengine-web.xml' file.

It possible to create custom data extractors (called 'excavators' here)
when using a private deployment if additional processing logic is necessary.
See __DefaultExcavator__ in the 'excavation.clj' file for an example.

###Hacking on the Application Source Code

* If you have used 'lein appengine-prepare' command to build a binary distribution,
before loading and compiling the application in REPL for interactive development 
you need to clean the distribution with Leiningen's 'lein clean' command 
and also comment out the following directive in project.clj: 
:aot [feedxcavator.app_servlet ...]. 
Do not forget to uncomment it when using 'appengine-prepare' command again 
(these issues are related to appengine-magic library).
* Compojure does not work on GAE as is, so to be able to deploy custom verson 
of the application on GAE you need to comment out a couple of lines related 
to multipart params in compojure's handler.clj file after you executed 
'lein deps' command, starting, probably, from the maven local cache.

### License

Copyright (C) 2011 g/christensen (gchristnsn@gmail.com)

Distributed under the Eclipse Public License, the same as Clojure.

