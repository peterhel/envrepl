If you're like me, a sucker for executing bash scripts remotely with `ssh`, there are times when escaping dollars with backslashes makes you dizzy.

I found `envsubst` in my Linux dist, happy as a guy can be, until I noticed it replaces `\$` as well.

Google didn't help. Until soon, when this very page has been picked up by the search bots. Look no further!

    Usage: envrepl

    Reads from standard input and replaces all $VAR with its environment value. $() is not yet supported.

    It's VERY simple tool. But no one knows what a couple of iterations can do!
