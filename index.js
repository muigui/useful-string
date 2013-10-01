	function capitalize( item ) {
		return item.charAt( 0 ).toUpperCase() + item.substring( 1 ).toLowerCase();
	}

	function guid_replace( match ) {
		var num = ( Math.random() * 16 ) | 0;
		return ( match == 'x' ? num : ( num & 0x3 | 0x8 ) ).toString( 16 );
	}

	function id_create( prefix ) {
		return ( prefix || id_prefix ) + '-' + ( ++id_count );
	}

	function interpolate( str, o, pattern ) {
		return String( str ).replace( ( pattern || re_gsub ), function( m, p ) {
			return o[p] || '';
		} );
	}

	// so we don't lose any chars on split
	function _splitString( m, p ) { return p + p.toLowerCase(); }
	function  splitString( s ) {
		s = s.trim();
		var s0 = s.charAt( 0 ), s1 = s.charAt( 1 ),
			 i = s0.toLowerCase() == s0 && s1 != ' ' && s1.toUpperCase() == s1 ? 2 : 1,
			 o = s.substring( i ).replace( re_caps, _splitString ).split( re_split_string );
		o[0] = s.substring( 0, i ) + o[0];
		return o;
	}

	var id_count        = 999,
		id_prefix       = 'anon',
		re_caps         = /([A-Z])/g,
		re_gsub         =  /\$?\{([^\}'"]+)\}/g,
		re_guid         = /[xy]/g,
		re_split_string = /[\sA-Z_-]+/g,
		tpl_guid        = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';


	module.exports = {
		capitalize  : capitalize,
		format      : function format( item ) {
			return interpolate( item, Array.prototype.slice.call( arguments, 1 ) );
		},
		guid        : function guid() { // credit for guid goes here: gist.github.com/2295777
			return tpl_guid.replace( re_guid, guid_replace );
		},
		hyphenate   : function hyphenate( item ) {
			return splitString( item ).join( '-' ).toLowerCase();
		},
		id          : function id( item, prefix ) {
			return item ? 'id' in Object( item ) && item.id ? item.id : ( item.id = id_create( prefix ) ) : id_create( prefix );
		},
		interpolate : interpolate,
		toCamelCase : function toCamelCase( item ) {
			var parts = splitString( item );

			return parts.reduce( function( res, val ) {
				res.push( capitalize( val ) );
				return res;
			}, [parts.shift()] ).join( '' );
		},
		underscore  : function underscore( item ) {
			return splitString( item ).join( '_' ).toLowerCase();
		}
	};
