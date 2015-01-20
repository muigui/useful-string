suite( 'muigui/useful-string', function() {

	test( '<static> string.capitalize', function( done ) {
		expect( string.capitalize( 'the quick brown fox jumps over the lazy dog.' ) ).to.equal( 'The quick brown fox jumps over the lazy dog.' );
		expect( string.capitalize( 'The quick brown fox jumps over the lazy dog.' ) ).to.equal( 'The quick brown fox jumps over the lazy dog.' );
		expect( string.capitalize( 'the Quick Brown Fox Jumps Over The Lazy Dog.' ) ).to.equal( 'The quick brown fox jumps over the lazy dog.' );
		expect( string.capitalize( 'The Quick Brown Fox Jumps Over The Lazy Dog.' ) ).to.equal( 'The quick brown fox jumps over the lazy dog.' );

		done();
	} );

	test( '<static> string.format', function( done ) {
		expect( string.format( '{0}, {1}, {2}, {3}, {4}, {5}, {6}, ${7}, ${8}, ${9}', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ) ).to.deep.equal( 'zero, one, two, three, four, five, six, seven, eight, nine' );
		expect( string.format( '{ "{0}" : \'{1}\', "${2}" : \'${3}\' }', 'zero', 'one', 'two', 'three' ) ).to.deep.equal( '{ "zero" : \'one\', "two" : \'three\' }' );

		done();
	} );

	test( '<static> string.hyphenate', function( done ) {
		expect( string.hyphenate( 'test_string_to_hyphenate' )  ).to.equal( 'test-string-to-hyphenate'  );
		expect( string.hyphenate( 'testStringToHyphenate' )     ).to.equal( 'test-string-to-hyphenate'  );
		expect( string.hyphenate( 'TestStringToHyphenate' )     ).to.equal( 'test-string-to-hyphenate'  );
		expect( string.hyphenate( 'test-string-to-hyphenate' )  ).to.equal( 'test-string-to-hyphenate'  );
		expect( string.hyphenate( '1 test string 2 hyphenate' ) ).to.equal( '1-test-string-2-hyphenate' );

		done();
	} );

	test( '<static> string.id', function( done ) {
		var expected = { id : 'foo' }, empty_obj = {};

		expect( string.id( expected ) ).to.equal( 'foo' );
		expect( empty_obj.id ).to.equal( undefined );
		expect( string.id( empty_obj ) ).to.equal( empty_obj.id );
		expect( string.id( {}, 'foo' ).split( '-' )[0] ).to.equal( 'foo' );

		done();
	} );

	test( '<static> string.interpolate', function( done ) {
		expect( string.interpolate( 'The {one} {two} {three} jumps over the ${four} ${five}.', {
			one   : 'quick', two  : 'brown',
			three : 'fox',   four : 'lazy',
			five  : 'dog'
		} ) ).to.equal( 'The quick brown fox jumps over the lazy dog.' );
		expect( string.interpolate( 'The ===one=== ===two=== ===three=== jumps over the ===four=== ===five===.', {
			one   : 'quick', two  : 'brown',
			three : 'fox',   four : 'lazy',
			five  : 'dog'
		}, /={3}([^=]+)={3}/g ) ).to.equal( 'The quick brown fox jumps over the lazy dog.' );

		expect( string.interpolate( 'The {falsey} to be true.', {
			falsey : false
		} ) ).to.equal( 'The false to be true.' );


		done();
	} );

	test( '<static> string.pad', function( done ) {
		expect( string.pad( 1, 3 ) ).to.equal( '001' );
		expect( string.pad( 100, 3 ) ).to.equal( '100' );

		expect( string.pad( 16, 4 ) ).to.equal( '0016' );
		expect( string.pad( 16, 4, 8 ) ).to.equal( '0020' );
		expect( string.pad( 16, 4, 10 ) ).to.equal( '0016' );
		expect( string.pad( 16, 4, 16 ) ).to.equal( '0010' );
		expect( string.pad( 16, 4, 2 ) ).to.equal( '10000' );

		done();
	} );

	test( '<static> string.toCamelCase', function( done ) {
		expect( string.toCamelCase( 'test_string_to_camel_case' )  ).to.equal( 'testStringToCamelCase' );
		expect( string.toCamelCase( 'testStringToCamelCase' )      ).to.equal( 'testStringToCamelCase' );
		expect( string.toCamelCase( 'TestStringToCamelCase' )      ).to.equal( 'TestStringToCamelCase' );
		expect( string.toCamelCase( 'test-string-to-camel-case' )  ).to.equal( 'testStringToCamelCase' );
		expect( string.toCamelCase( '1 test string 2 camel case' ) ).to.equal( '1TestString2CamelCase' );

		done();
	} );
} );
