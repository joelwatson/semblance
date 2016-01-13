# Semblance

Semblance is a data-generation tool designed specifically for Ext JS applications. Whether you need a random hex color, or need to craft a highly-structured array of data objects, Semblance--and its 50+ built-in generators--gives you great flexibility in crafting mock data for your application. Plus, with its simple generator structure, you can easily add in your own generators!

## Two Approaches

Semblance has two main approaches for generating data: the **API**, and the **Parser**.

### Semblance API

By default, Semblance will register all available generators and make them available via the main API class. For example, the "FirstName" generator has the following alias: "semblance.person.firstname", and you can generate a random first name like so:

    api.person.firstname('female');

The API is most appropriate when you need one-off data. If you need to compose more complex objects, you should use the Parser.

_See below for a list of available generators_

### Semblance Parser

The Semblance Parser is a flexible approach that allows you to provide a "structure" for the data you'd like to generate. For example, let's say you want to generate some fake contact information:

    api.parse({
    	name: '{{person.firstname}} {{person.lastname}}',
    	gender: '{{person.gender}}',
    	birthdate: '{{date.birthdate}}'
   	});

Notice how we can predefine the structure in which we'd like the data returned, while simultaneously defining the data points via "templates".

### Generator Templates

Generator templates can be used via the API's parse() method to query the individual generators for data. If the generator you are calling accepts arguments, you can use the following form:

    '{{person.firstname("female")}}'

If no arguments are needed, you may omit the parentheses altogether.

### The "Context"

Every generator is owned by a "context". The context is used primarily for organizing generators, tracking data for the context, and providing hooks within the generators to shared data. For example, let's say that you want to generate a business contact object:

    api.parse({
    	firstname: '{{person.firstname}}',
    	lastname: '{{person.lastname}}',
    	company: '{{company}}',
    	email: '{{web.email}}'
   	});

Because of the shared context for this parse request, the "email" generator has access to the values of the other generators. So in our example, the email generator can compose an email whose value is based on a concatenation of the firstname, lastname, and company name.

Generally, only one context will be created. However, if you are using a "repeat" template, a new context will be created for each level of iteration. This allows nested repeating templates to isolate their data.

### The "Repeat" Generator Template

Most generator templates return a simple value. However, the special "repeat" template can be used to define repeating regions within your parser object:

    api.parse(['{{repeat(2)}}', {
        company: '{{company}}',
        phone: '{{phone.number}}'
    }]);

This will result in an array of two objects containing generated company/phone data.

If needed, you can also nest repeating sections:

    api.parse(['{{repeat(2)}}', {
        company: '{{company}}',
        phone: '{{phone.number}}',
        employees: ['{{repeat(1, 5)}}', {
        	name: '{{person.firstname}} {{person.lastname}}'
        }]
    }]);

In this example, the same array of two objects will be created. However, each of these objects will additionally contain an array of employee data (a random number, from 1 to 5).

### Custom Functions

While you can always create your own generator if one of the built-in ones doesn't suffice, the parse() method also allows you to provide your own custom function. For example:

    api.parse({
    	firstName: '{{person.firstname}}',
    	lastName: '{{person.lastName}}',
    	// my custom function
    	full: function(api, index) {
            return this.firstName + ' ' + this.lastName + ' ' + api.date.birthdate();
        }
    });

The "this" scope of the custom function will be the "tracking" data object of the current context. Additionally, the Semblance API class, as well as the current "index" (useful for iterations) will be passed as arguments. As you can see in the example, data from the tracking object can be mixed with direct API calls.

## Creating Your Own Generator
If you need to create a custom generator, there are only a few pieces that you need.

### Base Class
Your custom generator can extend Semblance.generator.Base, or any of the existing generators. For example, if you have an "abbreviation" list that you'd like to turn into its own generator, you might extend **Semblance.generator.Abbreviation** as this class already knows how to deal with this kind of scenario.

### Alias
The alias you choose for your generator is critical as it will be what is used by the API and parser for detecting API calls and usages in templates. 

Aliases should be unique and should be in the following form:

    alias: 'semblance.customgenerator'
    
If you have generators that can be "packaged" in a category, you should provide that category as a part of the alias name:

    alias: 'semblance.tech.smartphone'

### data()
Your custom generator will need to implement a data() method which should ultimately return the generated value. This method may support any number of arguments.
    
### Context
It's typically not needed, but in some cases you may wish to access the current context of the generator in order to access data from other generators. You can access the context via the **getContext()** method which will return the context instance to which your generator instance belongs.

### lastValue
When parse() is used, the context will record the **lastValue** of each generator instance that is requested. You can retrieve this value via the **getLastValue()** method. 

### Helper Methods
**Semblance.generator.Base** includes several helper methods, including the following:

* **random(min, max)**: Returns a random integer between the min and max arguments
* **randomFloat(min, max, fixed)**: Returns a random float between the min/max, with precision applied
* **randomFln(digits, range)**: Returns a fixed-length number (as a string) containing only characters within the provided range

## Generators
Here are the currently-implemented generators. See one that's missing? Please submit a pull request!

### date
* **date.between()**: Return a date between a range
 * minDate: The lower bound of the possible range of the date
 * maxDate: The upper bound of the possible range of the date
 * format: The format to apply to the date (See Ext.Date formats for possible options)
* **date.birthdate()**: Return a random birthdate (0-92 years old)
 * minAge: The minimum age to allow for the birthdate
 * maxAge: The maximum age to allow for the birthdate
 * format: The format to apply to the date (See Ext.Date formats for possible options)
* **date.future()**: Return a date from the future
 * maxYears: The maximum years into the future to allow for the date
 * format: The format to apply to the date (See Ext.Date formats for possible options)
* **date.past()**: Return a date from the past
 * maxYears: The maximum years into the past to allow for the date
 * format: The format to apply to the date (See Ext.Date formats for possible options)
* **date.time()**: Return a random time
 * meridiem: If true, will add "AM/PM" to the time; if false, 24-hour time will be returned
* **date.timezone()**: Return a random timezone

### finance
* **finance.creditcard.code()**: Returns a random security code for a credit card (between 100-999)
* **finance.creditcard.number()**: Returns a random credit card number
 * card: The type of card to return (Visa, Mastercard, AMEX, Discover) 
* **finance.creditcard.type()**
* **finance.currency()**
 * type: The type of value to return (name, symbol, code)

### geo
* **geo.address.direction()**: Returns a random street direction (e.g., "North")
* **geo.address.mailing()**: Returns a random mailing address
* **geo.address.name()**: Returns a random street name
* **geo.address.number()**: Returns a random street number (500-3000)
* **geo.address.street()**: Returns a random street string (e.g., 2352 North Hollywood Blvd)
* **geo.address.type()**: Returns a random street type (e.g., "Way")
* **geo.city()**: Returns a random city name
* **geo.country()**: Returns a random country
 * abbreviation: If true, the abbreviation will be returned; otherwise, the full name will be returned 
* **geo.latitude()**: Returns a random latitude value
* **geo.longitude()**: Returns a random longitude value
* **geo.postalcode()**: Returns a random postal code
 * state: The state for which to retrieve a postal code
 * full: If true, an additional sequence (-xxxx) will be added to the postal code
* **geo.state()**: Returns a random state
 * abbreviation: If true, the abbreviation will be returned; otherwise, the full name will be returned

### person
* **person.firstname()**: Returns a random first name, optionally by gender
 * gender: The gender of name to return (male, female)
* **person.gender()**: Returns the gender of the last firstname that was generated
* **person.language()**: Returns a random language
* **person.lastname()**: Returns a random last name
* **person.race()**: Returns a random race
* **person.ssn()**: Returns a random SSN
* **person.suffix()**: Returns a random suffix (Ph.D.)
* **person.title()**: Returns a random title (Mr.)

### phone
* **phone.areacode()**: Returns a random area code
* **phone.number()**: Returns a random phone number
 * format: The format of the phone number to return, ex: "(xxx) xxx-xxxx"

### random
* **random.boolean()**: Returns true or false randomly
* **random.float()** Returns a random float
 * min: The mimimum value to return
 * max: The maximum value to return
 * fixed: The maximum level of precision to allow
 * format: The format to appy to the number (See Ext.util.Format.number() for possible options)
* **random.integer()** Returns a random integer
 * min: The mimimum value to return
 * max: The maximum value to return
 * format: The format to appy to the number (See Ext.util.Format.number() for possible options)
* **random.item()** Returns a random item from a passed list of arguments
 * args: Example: random.item("one", "two", "green", 123);
* **random.magic8ball()** The classic! Returns a random response, just like when you were a kid :)
* **random.uuid()** Returns a random UUID

### web
* **web.domain.extension()**: Returns a random url extension (com)
* **web.domain.name()**: Returns a random domain name
* **web.domain.protocol()**: Returns a random protocol (https)
* **web.domain.url()**: Returns a random url
* **web.color()**: Returns a random color
 * type: The type of color string to return (hex, rgb, rgba, name)
 * lowercase: If true, will lowercase the color name returned
* **web.email()**: Returns a random email
 * random: If true, will always generate a random email address. If false, will use firstname, lastname, company to generate an email (if possible)
* **web.filetype()**: Returns a random file type
* **web.ipv4()**: Returns a random IPv4 address
* **web.ipv6()**: Returns a random IPv6 address
* **web.mac()**: Returns a random MAC address
* **web.mimetype()**: Returns a random mime type
* **web.useragent()**: Returns a random user agent
* **web.username()**: Returns a random username

### other
* **company()**: Returns a random company name
* **index()**: Returns the current index (relevant for repeating sections)
* **lorem()**: Returns "lorem ipsum" text as words, sentences, or paragraphs
 * count: The number of elements to return
 * type: The type of lorem ipsum to return (word, paragraph, sentence)

