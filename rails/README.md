# rails-practice
learn the Ruby on Rails
http://rubyonrails.org/

# Installation for Rails

## install rbenv

```bash
$ git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
$ source ~/.bash_profile
$ exec $SHELL
$ rbenv
```

## install ruby-build

```bash
$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
## display available ruby versions
$ rbenv install -l
## install specific ruby version
$ rbenv install x.x.x
## set specific ruby version as global
$ rbenv global x.x.x
```

## install rails

```bash
$ gem install rails
```
