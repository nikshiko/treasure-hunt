/**
 * Created by kidboyks on 25/9/16.
 */
myApp.service('sharedProperties', function () {
        var clue = "This is your clue"

        return {
            getProperty: function () {
                return clue;
            },
            setProperty: function(value) {
                clue = value;
            }
        };
    });