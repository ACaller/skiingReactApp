CH2
02_01 Uses render and createElement to add in what we need
02_02 tries to sue this thing called jsx which is basically html but cannot be read
02_03 shows that you can use babel to read the jsx into the correct format but WHY
        it looks literally no faster and needs extra things. needs the script to be
        added into the html scripts at the top
02_04 shows how to statically transpile on the cmd line before the script reaches the browser
        src has all the react js and jsx and dist has everything for the browser
02_05 webpack intro - creates a bundle of all the scripts into one file so only 1 http request
02_06 loaders{test: finds all files ending with a certain filetype, shows how to import from libs
        using a json loader
02_07 using css stylesheets instead of inline styling. remember new loaders in webpack config
    also remember to include files at the top of each file


CH3
React Components
All code written into 03_02

01  setting up the initial component
02  filling the count.js from the props in index.js - dynamic data
    and using methods in each component class
03  class syntax using extends and removing commas, much nicer,
    more like c++, destructure imports to only use whats wanted and
    clean up syntax
04-06 stateless functional components - take in properties and return jsx info
    they cant access this so properties are passed in directly and local
    method need to be removed and put into their own functions
    stateless is actually much better. DO STATELESS
07  also how to get icons



CH4
//Props and State

01  setting up the input data in index.js
02  showing how the data passes through class to class through the intial
    render and the table and the rows. Calling <SkiDayList is like calling
    a function and passing params in. Also spread operator makes SO EASY
done in 01

03  default props by js (-createclass) and by es6 and by stateless js in separate files
04  PropTypes for data type validation - doesn't stop it but gives console warning
    also .isRequired to console if value missing (also done 3 ways)
05  custom data validation and error messages
06  getInitialState no longer exists in es6 use constructor and set state
07  passing data from array into props using state and splitting it using filter
08  just switching to es6 which was already done :P
done in 03
cannot set sate on a stateless functional component ...obviously



Ch5
being done in 05_01/finish
01  router lets you choose what components to render for each path
    and history lets it keep track of the browsing history
02  set up multiple routes based on ternary operators
03  navigating between the routes with a menu
04  filtering the data to show filtered table by sublink

in 05_05 it very self
05 putting the menu on the side - although I quite liked it aat the bottom
    and nested some routes



CH6
01  setting up the form to take inputs, be formatted and hold default values

02  using refs to capture field values

03  turning form from ES6 to stateless
    const{defaults} becomes default values passed as params
    ref names must be declared as let variables in the scope
    ref = "<value>" becomes ref = {input => <name>=input
    this.refs.<name>.value becomes <name>.value
    callback refs must be used when using stateless components

04  passing data from child to parent using 2 way function binding
    onnewday is declared in child and then called when the parent
    calls the child in the html <AddDayForm onNewDay = {this.addDay}/>
    and calls this.it'sownfunction that gets the params from the child.
    it also binds it in the constructor this.addDay = this.addDay.bind(this)

05  autocomplete list added and background image into assets/img and index.scss and index.js


