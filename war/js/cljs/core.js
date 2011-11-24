goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____3869 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3869))
{return or__3548__auto____3869;
} else
{var or__3548__auto____3870 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3870))
{return or__3548__auto____3870;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3871 = coll;

if(cljs.core.truth_(and__3546__auto____3871))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3871;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3872 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3872))
{return or__3548__auto____3872;
} else
{var or__3548__auto____3873 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3873))
{return or__3548__auto____3873;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3874 = coll;

if(cljs.core.truth_(and__3546__auto____3874))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3874;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3875 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3875))
{return or__3548__auto____3875;
} else
{var or__3548__auto____3876 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3876))
{return or__3548__auto____3876;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3877 = coll;

if(cljs.core.truth_(and__3546__auto____3877))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3877;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3878 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3878))
{return or__3548__auto____3878;
} else
{var or__3548__auto____3879 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3879))
{return or__3548__auto____3879;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__3886 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3880 = coll;

if(cljs.core.truth_(and__3546__auto____3880))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3880;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3881 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3881))
{return or__3548__auto____3881;
} else
{var or__3548__auto____3882 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3882))
{return or__3548__auto____3882;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3887 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3883 = coll;

if(cljs.core.truth_(and__3546__auto____3883))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3883;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3884 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3884))
{return or__3548__auto____3884;
} else
{var or__3548__auto____3885 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3885))
{return or__3548__auto____3885;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__3886.call(this,coll,n);
case  3 :
return _nth__3887.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3889 = coll;

if(cljs.core.truth_(and__3546__auto____3889))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3889;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3890 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3890))
{return or__3548__auto____3890;
} else
{var or__3548__auto____3891 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3891))
{return or__3548__auto____3891;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3892 = coll;

if(cljs.core.truth_(and__3546__auto____3892))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3892;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3893 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3893))
{return or__3548__auto____3893;
} else
{var or__3548__auto____3894 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3894))
{return or__3548__auto____3894;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__3901 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3895 = o;

if(cljs.core.truth_(and__3546__auto____3895))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3895;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3896 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3896))
{return or__3548__auto____3896;
} else
{var or__3548__auto____3897 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3897))
{return or__3548__auto____3897;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3902 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3898 = o;

if(cljs.core.truth_(and__3546__auto____3898))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3898;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3899 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3899))
{return or__3548__auto____3899;
} else
{var or__3548__auto____3900 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3900))
{return or__3548__auto____3900;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__3901.call(this,o,k);
case  3 :
return _lookup__3902.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3904 = coll;

if(cljs.core.truth_(and__3546__auto____3904))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3904;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3905 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3905))
{return or__3548__auto____3905;
} else
{var or__3548__auto____3906 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3906))
{return or__3548__auto____3906;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3907 = coll;

if(cljs.core.truth_(and__3546__auto____3907))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3907;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3908 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3908))
{return or__3548__auto____3908;
} else
{var or__3548__auto____3909 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3909))
{return or__3548__auto____3909;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3910 = coll;

if(cljs.core.truth_(and__3546__auto____3910))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3910;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3911 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3911))
{return or__3548__auto____3911;
} else
{var or__3548__auto____3912 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3912))
{return or__3548__auto____3912;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3913 = coll;

if(cljs.core.truth_(and__3546__auto____3913))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3913;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3914 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3914))
{return or__3548__auto____3914;
} else
{var or__3548__auto____3915 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3915))
{return or__3548__auto____3915;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3916 = coll;

if(cljs.core.truth_(and__3546__auto____3916))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3916;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3917 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3917))
{return or__3548__auto____3917;
} else
{var or__3548__auto____3918 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3918))
{return or__3548__auto____3918;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3919 = coll;

if(cljs.core.truth_(and__3546__auto____3919))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3919;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3920 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3920))
{return or__3548__auto____3920;
} else
{var or__3548__auto____3921 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3921))
{return or__3548__auto____3921;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3922 = coll;

if(cljs.core.truth_(and__3546__auto____3922))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3922;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3923 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3923))
{return or__3548__auto____3923;
} else
{var or__3548__auto____3924 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3924))
{return or__3548__auto____3924;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3925 = o;

if(cljs.core.truth_(and__3546__auto____3925))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3925;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3926 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3926))
{return or__3548__auto____3926;
} else
{var or__3548__auto____3927 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3927))
{return or__3548__auto____3927;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3928 = o;

if(cljs.core.truth_(and__3546__auto____3928))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3928;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3929 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3929))
{return or__3548__auto____3929;
} else
{var or__3548__auto____3930 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3930))
{return or__3548__auto____3930;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3931 = o;

if(cljs.core.truth_(and__3546__auto____3931))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3931;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3932 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3932))
{return or__3548__auto____3932;
} else
{var or__3548__auto____3933 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3933))
{return or__3548__auto____3933;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3934 = o;

if(cljs.core.truth_(and__3546__auto____3934))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3934;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3935 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3935))
{return or__3548__auto____3935;
} else
{var or__3548__auto____3936 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3936))
{return or__3548__auto____3936;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__3943 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3937 = coll;

if(cljs.core.truth_(and__3546__auto____3937))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3937;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3938 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3938))
{return or__3548__auto____3938;
} else
{var or__3548__auto____3939 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3939))
{return or__3548__auto____3939;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3944 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3940 = coll;

if(cljs.core.truth_(and__3546__auto____3940))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3940;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3941 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3941))
{return or__3548__auto____3941;
} else
{var or__3548__auto____3942 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3942))
{return or__3548__auto____3942;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__3943.call(this,coll,f);
case  3 :
return _reduce__3944.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3946 = o;

if(cljs.core.truth_(and__3546__auto____3946))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3946;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3947 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3947))
{return or__3548__auto____3947;
} else
{var or__3548__auto____3948 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3948))
{return or__3548__auto____3948;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3949 = o;

if(cljs.core.truth_(and__3546__auto____3949))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3949;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3950 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3950))
{return or__3548__auto____3950;
} else
{var or__3548__auto____3951 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3951))
{return or__3548__auto____3951;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3952 = o;

if(cljs.core.truth_(and__3546__auto____3952))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3952;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3953 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3953))
{return or__3548__auto____3953;
} else
{var or__3548__auto____3954 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3954))
{return or__3548__auto____3954;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____3955 = o;

if(cljs.core.truth_(and__3546__auto____3955))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3955;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3956 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3956))
{return or__3548__auto____3956;
} else
{var or__3548__auto____3957 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3957))
{return or__3548__auto____3957;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3958 = d;

if(cljs.core.truth_(and__3546__auto____3958))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3958;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3959 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3959))
{return or__3548__auto____3959;
} else
{var or__3548__auto____3960 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3960))
{return or__3548__auto____3960;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3961 = this$;

if(cljs.core.truth_(and__3546__auto____3961))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3961;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3962 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3962))
{return or__3548__auto____3962;
} else
{var or__3548__auto____3963 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3963))
{return or__3548__auto____3963;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3964 = this$;

if(cljs.core.truth_(and__3546__auto____3964))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3964;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3965 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3965))
{return or__3548__auto____3965;
} else
{var or__3548__auto____3966 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3966))
{return or__3548__auto____3966;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3967 = this$;

if(cljs.core.truth_(and__3546__auto____3967))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3967;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3968 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3968))
{return or__3548__auto____3968;
} else
{var or__3548__auto____3969 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3969))
{return or__3548__auto____3969;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3970 = null;
var G__3970__3971 = (function (o,k){
return null;
});
var G__3970__3972 = (function (o,k,not_found){
return not_found;
});
G__3970 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3970__3971.call(this,o,k);
case  3 :
return G__3970__3972.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3970;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3974 = null;
var G__3974__3975 = (function (_,f){
return f.call(null);
});
var G__3974__3976 = (function (_,f,start){
return start;
});
G__3974 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3974__3975.call(this,_,f);
case  3 :
return G__3974__3976.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3974;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3978 = null;
var G__3978__3979 = (function (_,n){
return null;
});
var G__3978__3980 = (function (_,n,not_found){
return not_found;
});
G__3978 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3978__3979.call(this,_,n);
case  3 :
return G__3978__3980.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3978;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString(),other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3988 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3982 = cljs.core._nth.call(null,cicoll,0);
var n__3983 = 1;

while(true){
if(cljs.core.truth_((n__3983 < cljs.core._count.call(null,cicoll))))
{{
var G__3992 = f.call(null,val__3982,cljs.core._nth.call(null,cicoll,n__3983));
var G__3993 = (n__3983 + 1);
val__3982 = G__3992;
n__3983 = G__3993;
continue;
}
} else
{return val__3982;
}
break;
}
}
});
var ci_reduce__3989 = (function (cicoll,f,val){
var val__3984 = val;
var n__3985 = 0;

while(true){
if(cljs.core.truth_((n__3985 < cljs.core._count.call(null,cicoll))))
{{
var G__3994 = f.call(null,val__3984,cljs.core._nth.call(null,cicoll,n__3985));
var G__3995 = (n__3985 + 1);
val__3984 = G__3994;
n__3985 = G__3995;
continue;
}
} else
{return val__3984;
}
break;
}
});
var ci_reduce__3990 = (function (cicoll,f,val,idx){
var val__3986 = val;
var n__3987 = idx;

while(true){
if(cljs.core.truth_((n__3987 < cljs.core._count.call(null,cicoll))))
{{
var G__3996 = f.call(null,val__3986,cljs.core._nth.call(null,cicoll,n__3987));
var G__3997 = (n__3987 + 1);
val__3986 = G__3996;
n__3987 = G__3997;
continue;
}
} else
{return val__3986;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3988.call(this,cicoll,f);
case  3 :
return ci_reduce__3989.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3990.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3998 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4011 = null;
var G__4011__4012 = (function (coll,f){
var this__3999 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__3999.a[this__3999.i]),(this__3999.i + 1));
});
var G__4011__4013 = (function (coll,f,start){
var this__4000 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__4000.i);
});
G__4011 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4011__4012.call(this,coll,f);
case  3 :
return G__4011__4013.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4011;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4001 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4002 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4015 = null;
var G__4015__4016 = (function (coll,n){
var this__4003 = this;
var i__4004 = (n + this__4003.i);

if(cljs.core.truth_((i__4004 < this__4003.a.length)))
{return (this__4003.a[i__4004]);
} else
{return null;
}
});
var G__4015__4017 = (function (coll,n,not_found){
var this__4005 = this;
var i__4006 = (n + this__4005.i);

if(cljs.core.truth_((i__4006 < this__4005.a.length)))
{return (this__4005.a[i__4006]);
} else
{return not_found;
}
});
G__4015 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4015__4016.call(this,coll,n);
case  3 :
return G__4015__4017.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4015;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__4007 = this;
return (this__4007.a.length - this__4007.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__4008 = this;
return (this__4008.a[this__4008.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__4009 = this;
if(cljs.core.truth_(((this__4009.i + 1) < this__4009.a.length)))
{return (new cljs.core.IndexedSeq(this__4009.a,(this__4009.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__4010 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__4019 = null;
var G__4019__4020 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__4019__4021 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__4019 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__4019__4020.call(this,array,f);
case  3 :
return G__4019__4021.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4019;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__4023 = null;
var G__4023__4024 = (function (array,k){
return (array[k]);
});
var G__4023__4025 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__4023 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__4023__4024.call(this,array,k);
case  3 :
return G__4023__4025.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4023;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__4027 = null;
var G__4027__4028 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__4027__4029 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__4027 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__4027__4028.call(this,array,n);
case  3 :
return G__4027__4029.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4027;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____4031 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4031))
{var s__4032 = temp__3698__auto____4031;

return cljs.core._first.call(null,s__4032);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__4033 = cljs.core.next.call(null,s);
s = G__4033;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__4034 = cljs.core.seq.call(null,x);
var n__4035 = 0;

while(true){
if(cljs.core.truth_(s__4034))
{{
var G__4036 = cljs.core.next.call(null,s__4034);
var G__4037 = (n__4035 + 1);
s__4034 = G__4036;
n__4035 = G__4037;
continue;
}
} else
{return n__4035;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__4038 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__4039 = (function() { 
var G__4041__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__4042 = conj.call(null,coll,x);
var G__4043 = cljs.core.first.call(null,xs);
var G__4044 = cljs.core.next.call(null,xs);
coll = G__4042;
x = G__4043;
xs = G__4044;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__4041 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4041__delegate.call(this, coll, x, xs);
};
G__4041.cljs$lang$maxFixedArity = 2;
G__4041.cljs$lang$applyTo = (function (arglist__4045){
var coll = cljs.core.first(arglist__4045);
var x = cljs.core.first(cljs.core.next(arglist__4045));
var xs = cljs.core.rest(cljs.core.next(arglist__4045));
return G__4041__delegate.call(this, coll, x, xs);
});
return G__4041;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__4038.call(this,coll,x);
default:
return conj__4039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__4039.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__4046 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__4047 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__4046.call(this,coll,n);
case  3 :
return nth__4047.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__4049 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__4050 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__4049.call(this,o,k);
case  3 :
return get__4050.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__4053 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4054 = (function() { 
var G__4056__delegate = function (coll,k,v,kvs){
while(true){
var ret__4052 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__4057 = ret__4052;
var G__4058 = cljs.core.first.call(null,kvs);
var G__4059 = cljs.core.second.call(null,kvs);
var G__4060 = cljs.core.nnext.call(null,kvs);
coll = G__4057;
k = G__4058;
v = G__4059;
kvs = G__4060;
continue;
}
} else
{return ret__4052;
}
break;
}
};
var G__4056 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4056__delegate.call(this, coll, k, v, kvs);
};
G__4056.cljs$lang$maxFixedArity = 3;
G__4056.cljs$lang$applyTo = (function (arglist__4061){
var coll = cljs.core.first(arglist__4061);
var k = cljs.core.first(cljs.core.next(arglist__4061));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4061)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4061)));
return G__4056__delegate.call(this, coll, k, v, kvs);
});
return G__4056;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__4053.call(this,coll,k,v);
default:
return assoc__4054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4054.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__4063 = (function (coll){
return coll;
});
var dissoc__4064 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__4065 = (function() { 
var G__4067__delegate = function (coll,k,ks){
while(true){
var ret__4062 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__4068 = ret__4062;
var G__4069 = cljs.core.first.call(null,ks);
var G__4070 = cljs.core.next.call(null,ks);
coll = G__4068;
k = G__4069;
ks = G__4070;
continue;
}
} else
{return ret__4062;
}
break;
}
};
var G__4067 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4067__delegate.call(this, coll, k, ks);
};
G__4067.cljs$lang$maxFixedArity = 2;
G__4067.cljs$lang$applyTo = (function (arglist__4071){
var coll = cljs.core.first(arglist__4071);
var k = cljs.core.first(cljs.core.next(arglist__4071));
var ks = cljs.core.rest(cljs.core.next(arglist__4071));
return G__4067__delegate.call(this, coll, k, ks);
});
return G__4067;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__4063.call(this,coll);
case  2 :
return dissoc__4064.call(this,coll,k);
default:
return dissoc__4065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__4065.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__316__auto____4072 = o;

if(cljs.core.truth_((function (){var and__3546__auto____4073 = x__316__auto____4072;

if(cljs.core.truth_(and__3546__auto____4073))
{var and__3546__auto____4074 = x__316__auto____4072.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4074))
{return cljs.core.not.call(null,x__316__auto____4072.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4074;
}
} else
{return and__3546__auto____4073;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__316__auto____4072);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__4076 = (function (coll){
return coll;
});
var disj__4077 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__4078 = (function() { 
var G__4080__delegate = function (coll,k,ks){
while(true){
var ret__4075 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__4081 = ret__4075;
var G__4082 = cljs.core.first.call(null,ks);
var G__4083 = cljs.core.next.call(null,ks);
coll = G__4081;
k = G__4082;
ks = G__4083;
continue;
}
} else
{return ret__4075;
}
break;
}
};
var G__4080 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4080__delegate.call(this, coll, k, ks);
};
G__4080.cljs$lang$maxFixedArity = 2;
G__4080.cljs$lang$applyTo = (function (arglist__4084){
var coll = cljs.core.first(arglist__4084);
var k = cljs.core.first(cljs.core.next(arglist__4084));
var ks = cljs.core.rest(cljs.core.next(arglist__4084));
return G__4080__delegate.call(this, coll, k, ks);
});
return G__4080;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__4076.call(this,coll);
case  2 :
return disj__4077.call(this,coll,k);
default:
return disj__4078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__4078.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____4085 = x;

if(cljs.core.truth_((function (){var and__3546__auto____4086 = x__316__auto____4085;

if(cljs.core.truth_(and__3546__auto____4086))
{var and__3546__auto____4087 = x__316__auto____4085.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____4087))
{return cljs.core.not.call(null,x__316__auto____4085.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____4087;
}
} else
{return and__3546__auto____4086;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__316__auto____4085);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____4088 = x;

if(cljs.core.truth_((function (){var and__3546__auto____4089 = x__316__auto____4088;

if(cljs.core.truth_(and__3546__auto____4089))
{var and__3546__auto____4090 = x__316__auto____4088.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____4090))
{return cljs.core.not.call(null,x__316__auto____4088.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____4090;
}
} else
{return and__3546__auto____4089;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__316__auto____4088);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__316__auto____4091 = x;

if(cljs.core.truth_((function (){var and__3546__auto____4092 = x__316__auto____4091;

if(cljs.core.truth_(and__3546__auto____4092))
{var and__3546__auto____4093 = x__316__auto____4091.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____4093))
{return cljs.core.not.call(null,x__316__auto____4091.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____4093;
}
} else
{return and__3546__auto____4092;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__316__auto____4091);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__316__auto____4094 = x;

if(cljs.core.truth_((function (){var and__3546__auto____4095 = x__316__auto____4094;

if(cljs.core.truth_(and__3546__auto____4095))
{var and__3546__auto____4096 = x__316__auto____4094.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____4096))
{return cljs.core.not.call(null,x__316__auto____4094.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____4096;
}
} else
{return and__3546__auto____4095;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__316__auto____4094);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__316__auto____4097 = x;

if(cljs.core.truth_((function (){var and__3546__auto____4098 = x__316__auto____4097;

if(cljs.core.truth_(and__3546__auto____4098))
{var and__3546__auto____4099 = x__316__auto____4097.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____4099))
{return cljs.core.not.call(null,x__316__auto____4097.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____4099;
}
} else
{return and__3546__auto____4098;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__316__auto____4097);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____4100 = x;

if(cljs.core.truth_((function (){var and__3546__auto____4101 = x__316__auto____4100;

if(cljs.core.truth_(and__3546__auto____4101))
{var and__3546__auto____4102 = x__316__auto____4100.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____4102))
{return cljs.core.not.call(null,x__316__auto____4100.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____4102;
}
} else
{return and__3546__auto____4101;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__316__auto____4100);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__316__auto____4103 = x;

if(cljs.core.truth_((function (){var and__3546__auto____4104 = x__316__auto____4103;

if(cljs.core.truth_(and__3546__auto____4104))
{var and__3546__auto____4105 = x__316__auto____4103.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____4105))
{return cljs.core.not.call(null,x__316__auto____4103.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____4105;
}
} else
{return and__3546__auto____4104;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__316__auto____4103);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__4106 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__4106.push(key);
}));
return keys__4106;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__316__auto____4107 = s;

if(cljs.core.truth_((function (){var and__3546__auto____4108 = x__316__auto____4107;

if(cljs.core.truth_(and__3546__auto____4108))
{var and__3546__auto____4109 = x__316__auto____4107.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____4109))
{return cljs.core.not.call(null,x__316__auto____4107.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____4109;
}
} else
{return and__3546__auto____4108;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__316__auto____4107);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____4110 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____4110))
{return cljs.core.not.call(null,(function (){var or__3548__auto____4111 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____4111))
{return or__3548__auto____4111;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____4110;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____4112 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____4112))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____4112;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____4113 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____4113))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____4113;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____4114 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____4114))
{return (n == n.toFixed());
} else
{return and__3546__auto____4114;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____4115 = coll;

if(cljs.core.truth_(and__3546__auto____4115))
{var and__3546__auto____4116 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4116))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____4116;
}
} else
{return and__3546__auto____4115;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___4121 = (function (x){
return true;
});
var distinct_QMARK___4122 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___4123 = (function() { 
var G__4125__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__4117 = cljs.core.set([y,x]);
var xs__4118 = more;

while(true){
var x__4119 = cljs.core.first.call(null,xs__4118);
var etc__4120 = cljs.core.next.call(null,xs__4118);

if(cljs.core.truth_(xs__4118))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__4117,x__4119)))
{return false;
} else
{{
var G__4126 = cljs.core.conj.call(null,s__4117,x__4119);
var G__4127 = etc__4120;
s__4117 = G__4126;
xs__4118 = G__4127;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__4125 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4125__delegate.call(this, x, y, more);
};
G__4125.cljs$lang$maxFixedArity = 2;
G__4125.cljs$lang$applyTo = (function (arglist__4128){
var x = cljs.core.first(arglist__4128);
var y = cljs.core.first(cljs.core.next(arglist__4128));
var more = cljs.core.rest(cljs.core.next(arglist__4128));
return G__4125__delegate.call(this, x, y, more);
});
return G__4125;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___4121.call(this,x);
case  2 :
return distinct_QMARK___4122.call(this,x,y);
default:
return distinct_QMARK___4123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___4123.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__4129 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__4129)))
{return r__4129;
} else
{if(cljs.core.truth_(r__4129))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__4131 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__4132 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__4130 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__4130,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__4130);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__4131.call(this,comp);
case  2 :
return sort__4132.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__4134 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__4135 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__4134.call(this,keyfn,comp);
case  3 :
return sort_by__4135.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__4137 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__4138 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__4137.call(this,f,val);
case  3 :
return reduce__4138.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__4144 = (function (f,coll){
var temp__3695__auto____4140 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4140))
{var s__4141 = temp__3695__auto____4140;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__4141),cljs.core.next.call(null,s__4141));
} else
{return f.call(null);
}
});
var seq_reduce__4145 = (function (f,val,coll){
var val__4142 = val;
var coll__4143 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__4143))
{{
var G__4147 = f.call(null,val__4142,cljs.core.first.call(null,coll__4143));
var G__4148 = cljs.core.next.call(null,coll__4143);
val__4142 = G__4147;
coll__4143 = G__4148;
continue;
}
} else
{return val__4142;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__4144.call(this,f,val);
case  3 :
return seq_reduce__4145.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__4149 = null;
var G__4149__4150 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__4149__4151 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__4149 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4149__4150.call(this,coll,f);
case  3 :
return G__4149__4151.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4149;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___4153 = (function (){
return 0;
});
var _PLUS___4154 = (function (x){
return x;
});
var _PLUS___4155 = (function (x,y){
return (x + y);
});
var _PLUS___4156 = (function() { 
var G__4158__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__4158 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4158__delegate.call(this, x, y, more);
};
G__4158.cljs$lang$maxFixedArity = 2;
G__4158.cljs$lang$applyTo = (function (arglist__4159){
var x = cljs.core.first(arglist__4159);
var y = cljs.core.first(cljs.core.next(arglist__4159));
var more = cljs.core.rest(cljs.core.next(arglist__4159));
return G__4158__delegate.call(this, x, y, more);
});
return G__4158;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___4153.call(this);
case  1 :
return _PLUS___4154.call(this,x);
case  2 :
return _PLUS___4155.call(this,x,y);
default:
return _PLUS___4156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___4156.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___4160 = (function (x){
return (- x);
});
var ___4161 = (function (x,y){
return (x - y);
});
var ___4162 = (function() { 
var G__4164__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__4164 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4164__delegate.call(this, x, y, more);
};
G__4164.cljs$lang$maxFixedArity = 2;
G__4164.cljs$lang$applyTo = (function (arglist__4165){
var x = cljs.core.first(arglist__4165);
var y = cljs.core.first(cljs.core.next(arglist__4165));
var more = cljs.core.rest(cljs.core.next(arglist__4165));
return G__4164__delegate.call(this, x, y, more);
});
return G__4164;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___4160.call(this,x);
case  2 :
return ___4161.call(this,x,y);
default:
return ___4162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___4162.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___4166 = (function (){
return 1;
});
var _STAR___4167 = (function (x){
return x;
});
var _STAR___4168 = (function (x,y){
return (x * y);
});
var _STAR___4169 = (function() { 
var G__4171__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__4171 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4171__delegate.call(this, x, y, more);
};
G__4171.cljs$lang$maxFixedArity = 2;
G__4171.cljs$lang$applyTo = (function (arglist__4172){
var x = cljs.core.first(arglist__4172);
var y = cljs.core.first(cljs.core.next(arglist__4172));
var more = cljs.core.rest(cljs.core.next(arglist__4172));
return G__4171__delegate.call(this, x, y, more);
});
return G__4171;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___4166.call(this);
case  1 :
return _STAR___4167.call(this,x);
case  2 :
return _STAR___4168.call(this,x,y);
default:
return _STAR___4169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___4169.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___4173 = (function (x){
return (1 / x);
});
var _SLASH___4174 = (function (x,y){
return (x / y);
});
var _SLASH___4175 = (function() { 
var G__4177__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__4177 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4177__delegate.call(this, x, y, more);
};
G__4177.cljs$lang$maxFixedArity = 2;
G__4177.cljs$lang$applyTo = (function (arglist__4178){
var x = cljs.core.first(arglist__4178);
var y = cljs.core.first(cljs.core.next(arglist__4178));
var more = cljs.core.rest(cljs.core.next(arglist__4178));
return G__4177__delegate.call(this, x, y, more);
});
return G__4177;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___4173.call(this,x);
case  2 :
return _SLASH___4174.call(this,x,y);
default:
return _SLASH___4175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___4175.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___4179 = (function (x){
return true;
});
var _LT___4180 = (function (x,y){
return (x < y);
});
var _LT___4181 = (function() { 
var G__4183__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4184 = y;
var G__4185 = cljs.core.first.call(null,more);
var G__4186 = cljs.core.next.call(null,more);
x = G__4184;
y = G__4185;
more = G__4186;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4183 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4183__delegate.call(this, x, y, more);
};
G__4183.cljs$lang$maxFixedArity = 2;
G__4183.cljs$lang$applyTo = (function (arglist__4187){
var x = cljs.core.first(arglist__4187);
var y = cljs.core.first(cljs.core.next(arglist__4187));
var more = cljs.core.rest(cljs.core.next(arglist__4187));
return G__4183__delegate.call(this, x, y, more);
});
return G__4183;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___4179.call(this,x);
case  2 :
return _LT___4180.call(this,x,y);
default:
return _LT___4181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___4181.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___4188 = (function (x){
return true;
});
var _LT__EQ___4189 = (function (x,y){
return (x <= y);
});
var _LT__EQ___4190 = (function() { 
var G__4192__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4193 = y;
var G__4194 = cljs.core.first.call(null,more);
var G__4195 = cljs.core.next.call(null,more);
x = G__4193;
y = G__4194;
more = G__4195;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4192 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4192__delegate.call(this, x, y, more);
};
G__4192.cljs$lang$maxFixedArity = 2;
G__4192.cljs$lang$applyTo = (function (arglist__4196){
var x = cljs.core.first(arglist__4196);
var y = cljs.core.first(cljs.core.next(arglist__4196));
var more = cljs.core.rest(cljs.core.next(arglist__4196));
return G__4192__delegate.call(this, x, y, more);
});
return G__4192;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___4188.call(this,x);
case  2 :
return _LT__EQ___4189.call(this,x,y);
default:
return _LT__EQ___4190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___4190.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___4197 = (function (x){
return true;
});
var _GT___4198 = (function (x,y){
return (x > y);
});
var _GT___4199 = (function() { 
var G__4201__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4202 = y;
var G__4203 = cljs.core.first.call(null,more);
var G__4204 = cljs.core.next.call(null,more);
x = G__4202;
y = G__4203;
more = G__4204;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4201 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4201__delegate.call(this, x, y, more);
};
G__4201.cljs$lang$maxFixedArity = 2;
G__4201.cljs$lang$applyTo = (function (arglist__4205){
var x = cljs.core.first(arglist__4205);
var y = cljs.core.first(cljs.core.next(arglist__4205));
var more = cljs.core.rest(cljs.core.next(arglist__4205));
return G__4201__delegate.call(this, x, y, more);
});
return G__4201;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___4197.call(this,x);
case  2 :
return _GT___4198.call(this,x,y);
default:
return _GT___4199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___4199.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___4206 = (function (x){
return true;
});
var _GT__EQ___4207 = (function (x,y){
return (x >= y);
});
var _GT__EQ___4208 = (function() { 
var G__4210__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4211 = y;
var G__4212 = cljs.core.first.call(null,more);
var G__4213 = cljs.core.next.call(null,more);
x = G__4211;
y = G__4212;
more = G__4213;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4210 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4210__delegate.call(this, x, y, more);
};
G__4210.cljs$lang$maxFixedArity = 2;
G__4210.cljs$lang$applyTo = (function (arglist__4214){
var x = cljs.core.first(arglist__4214);
var y = cljs.core.first(cljs.core.next(arglist__4214));
var more = cljs.core.rest(cljs.core.next(arglist__4214));
return G__4210__delegate.call(this, x, y, more);
});
return G__4210;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___4206.call(this,x);
case  2 :
return _GT__EQ___4207.call(this,x,y);
default:
return _GT__EQ___4208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___4208.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__4215 = (function (x){
return x;
});
var max__4216 = (function (x,y){
return ((x > y) ? x : y);
});
var max__4217 = (function() { 
var G__4219__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__4219 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4219__delegate.call(this, x, y, more);
};
G__4219.cljs$lang$maxFixedArity = 2;
G__4219.cljs$lang$applyTo = (function (arglist__4220){
var x = cljs.core.first(arglist__4220);
var y = cljs.core.first(cljs.core.next(arglist__4220));
var more = cljs.core.rest(cljs.core.next(arglist__4220));
return G__4219__delegate.call(this, x, y, more);
});
return G__4219;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__4215.call(this,x);
case  2 :
return max__4216.call(this,x,y);
default:
return max__4217.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__4217.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__4221 = (function (x){
return x;
});
var min__4222 = (function (x,y){
return ((x < y) ? x : y);
});
var min__4223 = (function() { 
var G__4225__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__4225 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4225__delegate.call(this, x, y, more);
};
G__4225.cljs$lang$maxFixedArity = 2;
G__4225.cljs$lang$applyTo = (function (arglist__4226){
var x = cljs.core.first(arglist__4226);
var y = cljs.core.first(cljs.core.next(arglist__4226));
var more = cljs.core.rest(cljs.core.next(arglist__4226));
return G__4225__delegate.call(this, x, y, more);
});
return G__4225;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__4221.call(this,x);
case  2 :
return min__4222.call(this,x,y);
default:
return min__4223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__4223.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__4227 = (n % d);

return cljs.core.fix.call(null,((n - rem__4227) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__4228 = cljs.core.quot.call(null,n,d);

return (n - (d * q__4228));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4229 = (function (){
return Math.random.call(null);
});
var rand__4230 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4229.call(this);
case  1 :
return rand__4230.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___4232 = (function (x){
return true;
});
var _EQ__EQ___4233 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___4234 = (function() { 
var G__4236__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4237 = y;
var G__4238 = cljs.core.first.call(null,more);
var G__4239 = cljs.core.next.call(null,more);
x = G__4237;
y = G__4238;
more = G__4239;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4236 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4236__delegate.call(this, x, y, more);
};
G__4236.cljs$lang$maxFixedArity = 2;
G__4236.cljs$lang$applyTo = (function (arglist__4240){
var x = cljs.core.first(arglist__4240);
var y = cljs.core.first(cljs.core.next(arglist__4240));
var more = cljs.core.rest(cljs.core.next(arglist__4240));
return G__4236__delegate.call(this, x, y, more);
});
return G__4236;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___4232.call(this,x);
case  2 :
return _EQ__EQ___4233.call(this,x,y);
default:
return _EQ__EQ___4234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___4234.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__4241 = n;
var xs__4242 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4243 = xs__4242;

if(cljs.core.truth_(and__3546__auto____4243))
{return (n__4241 > 0);
} else
{return and__3546__auto____4243;
}
})()))
{{
var G__4244 = (n__4241 - 1);
var G__4245 = cljs.core.next.call(null,xs__4242);
n__4241 = G__4244;
xs__4242 = G__4245;
continue;
}
} else
{return xs__4242;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__4250 = null;
var G__4250__4251 = (function (coll,n){
var temp__3695__auto____4246 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____4246))
{var xs__4247 = temp__3695__auto____4246;

return cljs.core.first.call(null,xs__4247);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__4250__4252 = (function (coll,n,not_found){
var temp__3695__auto____4248 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____4248))
{var xs__4249 = temp__3695__auto____4248;

return cljs.core.first.call(null,xs__4249);
} else
{return not_found;
}
});
G__4250 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4250__4251.call(this,coll,n);
case  3 :
return G__4250__4252.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4250;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___4254 = (function (){
return "";
});
var str_STAR___4255 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___4256 = (function() { 
var G__4258__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__4259 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__4260 = cljs.core.next.call(null,more);
sb = G__4259;
more = G__4260;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__4258 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4258__delegate.call(this, x, ys);
};
G__4258.cljs$lang$maxFixedArity = 1;
G__4258.cljs$lang$applyTo = (function (arglist__4261){
var x = cljs.core.first(arglist__4261);
var ys = cljs.core.rest(arglist__4261);
return G__4258__delegate.call(this, x, ys);
});
return G__4258;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___4254.call(this);
case  1 :
return str_STAR___4255.call(this,x);
default:
return str_STAR___4256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___4256.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__4262 = (function (){
return "";
});
var str__4263 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__4264 = (function() { 
var G__4266__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__4266 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4266__delegate.call(this, x, ys);
};
G__4266.cljs$lang$maxFixedArity = 1;
G__4266.cljs$lang$applyTo = (function (arglist__4267){
var x = cljs.core.first(arglist__4267);
var ys = cljs.core.rest(arglist__4267);
return G__4266__delegate.call(this, x, ys);
});
return G__4266;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__4262.call(this);
case  1 :
return str__4263.call(this,x);
default:
return str__4264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__4264.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__4268 = (function (s,start){
return s.substring(start);
});
var subs__4269 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__4268.call(this,s,start);
case  3 :
return subs__4269.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__4271 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__4272 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__4271.call(this,ns);
case  2 :
return symbol__4272.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__4274 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__4275 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__4274.call(this,ns);
case  2 :
return keyword__4275.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__4277 = cljs.core.seq.call(null,x);
var ys__4278 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__4277)))
{return cljs.core.nil_QMARK_.call(null,ys__4278);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__4278)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__4277),cljs.core.first.call(null,ys__4278))))
{{
var G__4279 = cljs.core.next.call(null,xs__4277);
var G__4280 = cljs.core.next.call(null,ys__4278);
xs__4277 = G__4279;
ys__4278 = G__4280;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__4281_SHARP_,p2__4282_SHARP_){
return cljs.core.hash_combine.call(null,p1__4281_SHARP_,cljs.core.hash.call(null,p2__4282_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__4283__4284 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__4283__4284))
{var G__4286__4288 = cljs.core.first.call(null,G__4283__4284);
var vec__4287__4289 = G__4286__4288;
var key_name__4290 = cljs.core.nth.call(null,vec__4287__4289,0,null);
var f__4291 = cljs.core.nth.call(null,vec__4287__4289,1,null);
var G__4283__4292 = G__4283__4284;

var G__4286__4293 = G__4286__4288;
var G__4283__4294 = G__4283__4292;

while(true){
var vec__4295__4296 = G__4286__4293;
var key_name__4297 = cljs.core.nth.call(null,vec__4295__4296,0,null);
var f__4298 = cljs.core.nth.call(null,vec__4295__4296,1,null);
var G__4283__4299 = G__4283__4294;

var str_name__4300 = cljs.core.name.call(null,key_name__4297);

obj[str_name__4300] = f__4298;
var temp__3698__auto____4301 = cljs.core.next.call(null,G__4283__4299);

if(cljs.core.truth_(temp__3698__auto____4301))
{var G__4283__4302 = temp__3698__auto____4301;

{
var G__4303 = cljs.core.first.call(null,G__4283__4302);
var G__4304 = G__4283__4302;
G__4286__4293 = G__4303;
G__4283__4294 = G__4304;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4305 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4306 = this;
return (new cljs.core.List(this__4306.meta,o,coll,(this__4306.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4307 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4308 = this;
return this__4308.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4309 = this;
return this__4309.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4310 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4311 = this;
return this__4311.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4312 = this;
return this__4312.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4313 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4314 = this;
return (new cljs.core.List(meta,this__4314.first,this__4314.rest,this__4314.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4315 = this;
return this__4315.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4316 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4317 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4318 = this;
return (new cljs.core.List(this__4318.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4319 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4320 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4321 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4322 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4323 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4324 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4325 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4326 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4327 = this;
return this__4327.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4328 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__4329){
var items = cljs.core.seq( arglist__4329 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4330 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4331 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4332 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4333 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4333.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4334 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4335 = this;
return this__4335.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4336 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__4336.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__4336.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4337 = this;
return this__4337.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4338 = this;
return (new cljs.core.Cons(meta,this__4338.first,this__4338.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__4339 = null;
var G__4339__4340 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__4339__4341 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__4339 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__4339__4340.call(this,string,f);
case  3 :
return G__4339__4341.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4339;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__4343 = null;
var G__4343__4344 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__4343__4345 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__4343 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__4343__4344.call(this,string,k);
case  3 :
return G__4343__4345.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4343;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__4347 = null;
var G__4347__4348 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__4347__4349 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__4347 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__4347__4348.call(this,string,n);
case  3 :
return G__4347__4349.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4347;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__4351 = null;
var G__4351__4352 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__4351__4353 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__4351 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__4351__4352.call(this,_,coll);
case  3 :
return G__4351__4353.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4351;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__4355 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__4355;
} else
{lazy_seq.x = x__4355.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4356 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4357 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4358 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4359 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4359.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4360 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4361 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4362 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4363 = this;
return this__4363.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4364 = this;
return (new cljs.core.LazySeq(meta,this__4364.realized,this__4364.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__4365 = cljs.core.array.call(null);

var s__4366 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4366)))
{ary__4365.push(cljs.core.first.call(null,s__4366));
{
var G__4367 = cljs.core.next.call(null,s__4366);
s__4366 = G__4367;
continue;
}
} else
{return ary__4365;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__4368 = s;
var i__4369 = n;
var sum__4370 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4371 = (i__4369 > 0);

if(cljs.core.truth_(and__3546__auto____4371))
{return cljs.core.seq.call(null,s__4368);
} else
{return and__3546__auto____4371;
}
})()))
{{
var G__4372 = cljs.core.next.call(null,s__4368);
var G__4373 = (i__4369 - 1);
var G__4374 = (sum__4370 + 1);
s__4368 = G__4372;
i__4369 = G__4373;
sum__4370 = G__4374;
continue;
}
} else
{return sum__4370;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__4378 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__4379 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__4380 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4375 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__4375))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4375),concat.call(null,cljs.core.rest.call(null,s__4375),y));
} else
{return y;
}
})));
});
var concat__4381 = (function() { 
var G__4383__delegate = function (x,y,zs){
var cat__4377 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__4376 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__4376))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__4376),cat.call(null,cljs.core.rest.call(null,xys__4376),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__4377.call(null,concat.call(null,x,y),zs);
};
var G__4383 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4383__delegate.call(this, x, y, zs);
};
G__4383.cljs$lang$maxFixedArity = 2;
G__4383.cljs$lang$applyTo = (function (arglist__4384){
var x = cljs.core.first(arglist__4384);
var y = cljs.core.first(cljs.core.next(arglist__4384));
var zs = cljs.core.rest(cljs.core.next(arglist__4384));
return G__4383__delegate.call(this, x, y, zs);
});
return G__4383;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__4378.call(this);
case  1 :
return concat__4379.call(this,x);
case  2 :
return concat__4380.call(this,x,y);
default:
return concat__4381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__4381.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___4385 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___4386 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___4387 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4388 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___4389 = (function() { 
var G__4391__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__4391 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4391__delegate.call(this, a, b, c, d, more);
};
G__4391.cljs$lang$maxFixedArity = 4;
G__4391.cljs$lang$applyTo = (function (arglist__4392){
var a = cljs.core.first(arglist__4392);
var b = cljs.core.first(cljs.core.next(arglist__4392));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4392)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4392))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4392))));
return G__4391__delegate.call(this, a, b, c, d, more);
});
return G__4391;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___4385.call(this,a);
case  2 :
return list_STAR___4386.call(this,a,b);
case  3 :
return list_STAR___4387.call(this,a,b,c);
case  4 :
return list_STAR___4388.call(this,a,b,c,d);
default:
return list_STAR___4389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___4389.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__4402 = (function (f,args){
var fixed_arity__4393 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__4393 + 1)) <= fixed_arity__4393)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__4403 = (function (f,x,args){
var arglist__4394 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__4395 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4394,fixed_arity__4395) <= fixed_arity__4395)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4394));
} else
{return f.cljs$lang$applyTo(arglist__4394);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4394));
}
});
var apply__4404 = (function (f,x,y,args){
var arglist__4396 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__4397 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4396,fixed_arity__4397) <= fixed_arity__4397)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4396));
} else
{return f.cljs$lang$applyTo(arglist__4396);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4396));
}
});
var apply__4405 = (function (f,x,y,z,args){
var arglist__4398 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__4399 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4398,fixed_arity__4399) <= fixed_arity__4399)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4398));
} else
{return f.cljs$lang$applyTo(arglist__4398);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4398));
}
});
var apply__4406 = (function() { 
var G__4408__delegate = function (f,a,b,c,d,args){
var arglist__4400 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__4401 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4400,fixed_arity__4401) <= fixed_arity__4401)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4400));
} else
{return f.cljs$lang$applyTo(arglist__4400);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4400));
}
};
var G__4408 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4408__delegate.call(this, f, a, b, c, d, args);
};
G__4408.cljs$lang$maxFixedArity = 5;
G__4408.cljs$lang$applyTo = (function (arglist__4409){
var f = cljs.core.first(arglist__4409);
var a = cljs.core.first(cljs.core.next(arglist__4409));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4409)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4409))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4409)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4409)))));
return G__4408__delegate.call(this, f, a, b, c, d, args);
});
return G__4408;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__4402.call(this,f,a);
case  3 :
return apply__4403.call(this,f,a,b);
case  4 :
return apply__4404.call(this,f,a,b,c);
case  5 :
return apply__4405.call(this,f,a,b,c,d);
default:
return apply__4406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__4406.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__4410){
var obj = cljs.core.first(arglist__4410);
var f = cljs.core.first(cljs.core.next(arglist__4410));
var args = cljs.core.rest(cljs.core.next(arglist__4410));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___4411 = (function (x){
return false;
});
var not_EQ___4412 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___4413 = (function() { 
var G__4415__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__4415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4415__delegate.call(this, x, y, more);
};
G__4415.cljs$lang$maxFixedArity = 2;
G__4415.cljs$lang$applyTo = (function (arglist__4416){
var x = cljs.core.first(arglist__4416);
var y = cljs.core.first(cljs.core.next(arglist__4416));
var more = cljs.core.rest(cljs.core.next(arglist__4416));
return G__4415__delegate.call(this, x, y, more);
});
return G__4415;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___4411.call(this,x);
case  2 :
return not_EQ___4412.call(this,x,y);
default:
return not_EQ___4413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___4413.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__4417 = pred;
var G__4418 = cljs.core.next.call(null,coll);
pred = G__4417;
coll = G__4418;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____4419 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____4419))
{return or__3548__auto____4419;
} else
{{
var G__4420 = pred;
var G__4421 = cljs.core.next.call(null,coll);
pred = G__4420;
coll = G__4421;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__4422 = null;
var G__4422__4423 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__4422__4424 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__4422__4425 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__4422__4426 = (function() { 
var G__4428__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__4428 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4428__delegate.call(this, x, y, zs);
};
G__4428.cljs$lang$maxFixedArity = 2;
G__4428.cljs$lang$applyTo = (function (arglist__4429){
var x = cljs.core.first(arglist__4429);
var y = cljs.core.first(cljs.core.next(arglist__4429));
var zs = cljs.core.rest(cljs.core.next(arglist__4429));
return G__4428__delegate.call(this, x, y, zs);
});
return G__4428;
})()
;
G__4422 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__4422__4423.call(this);
case  1 :
return G__4422__4424.call(this,x);
case  2 :
return G__4422__4425.call(this,x,y);
default:
return G__4422__4426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4422.cljs$lang$maxFixedArity = 2;
G__4422.cljs$lang$applyTo = G__4422__4426.cljs$lang$applyTo;
return G__4422;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__4430__delegate = function (args){
return x;
};
var G__4430 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4430__delegate.call(this, args);
};
G__4430.cljs$lang$maxFixedArity = 0;
G__4430.cljs$lang$applyTo = (function (arglist__4431){
var args = cljs.core.seq( arglist__4431 );;
return G__4430__delegate.call(this, args);
});
return G__4430;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__4435 = (function (){
return cljs.core.identity;
});
var comp__4436 = (function (f){
return f;
});
var comp__4437 = (function (f,g){
return (function() {
var G__4441 = null;
var G__4441__4442 = (function (){
return f.call(null,g.call(null));
});
var G__4441__4443 = (function (x){
return f.call(null,g.call(null,x));
});
var G__4441__4444 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__4441__4445 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__4441__4446 = (function() { 
var G__4448__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4448 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4448__delegate.call(this, x, y, z, args);
};
G__4448.cljs$lang$maxFixedArity = 3;
G__4448.cljs$lang$applyTo = (function (arglist__4449){
var x = cljs.core.first(arglist__4449);
var y = cljs.core.first(cljs.core.next(arglist__4449));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4449)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4449)));
return G__4448__delegate.call(this, x, y, z, args);
});
return G__4448;
})()
;
G__4441 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4441__4442.call(this);
case  1 :
return G__4441__4443.call(this,x);
case  2 :
return G__4441__4444.call(this,x,y);
case  3 :
return G__4441__4445.call(this,x,y,z);
default:
return G__4441__4446.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4441.cljs$lang$maxFixedArity = 3;
G__4441.cljs$lang$applyTo = G__4441__4446.cljs$lang$applyTo;
return G__4441;
})()
});
var comp__4438 = (function (f,g,h){
return (function() {
var G__4450 = null;
var G__4450__4451 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__4450__4452 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__4450__4453 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__4450__4454 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__4450__4455 = (function() { 
var G__4457__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__4457 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4457__delegate.call(this, x, y, z, args);
};
G__4457.cljs$lang$maxFixedArity = 3;
G__4457.cljs$lang$applyTo = (function (arglist__4458){
var x = cljs.core.first(arglist__4458);
var y = cljs.core.first(cljs.core.next(arglist__4458));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4458)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4458)));
return G__4457__delegate.call(this, x, y, z, args);
});
return G__4457;
})()
;
G__4450 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4450__4451.call(this);
case  1 :
return G__4450__4452.call(this,x);
case  2 :
return G__4450__4453.call(this,x,y);
case  3 :
return G__4450__4454.call(this,x,y,z);
default:
return G__4450__4455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4450.cljs$lang$maxFixedArity = 3;
G__4450.cljs$lang$applyTo = G__4450__4455.cljs$lang$applyTo;
return G__4450;
})()
});
var comp__4439 = (function() { 
var G__4459__delegate = function (f1,f2,f3,fs){
var fs__4432 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__4460__delegate = function (args){
var ret__4433 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__4432),args);
var fs__4434 = cljs.core.next.call(null,fs__4432);

while(true){
if(cljs.core.truth_(fs__4434))
{{
var G__4461 = cljs.core.first.call(null,fs__4434).call(null,ret__4433);
var G__4462 = cljs.core.next.call(null,fs__4434);
ret__4433 = G__4461;
fs__4434 = G__4462;
continue;
}
} else
{return ret__4433;
}
break;
}
};
var G__4460 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4460__delegate.call(this, args);
};
G__4460.cljs$lang$maxFixedArity = 0;
G__4460.cljs$lang$applyTo = (function (arglist__4463){
var args = cljs.core.seq( arglist__4463 );;
return G__4460__delegate.call(this, args);
});
return G__4460;
})()
;
};
var G__4459 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4459__delegate.call(this, f1, f2, f3, fs);
};
G__4459.cljs$lang$maxFixedArity = 3;
G__4459.cljs$lang$applyTo = (function (arglist__4464){
var f1 = cljs.core.first(arglist__4464);
var f2 = cljs.core.first(cljs.core.next(arglist__4464));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4464)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4464)));
return G__4459__delegate.call(this, f1, f2, f3, fs);
});
return G__4459;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__4435.call(this);
case  1 :
return comp__4436.call(this,f1);
case  2 :
return comp__4437.call(this,f1,f2);
case  3 :
return comp__4438.call(this,f1,f2,f3);
default:
return comp__4439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4439.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__4465 = (function (f,arg1){
return (function() { 
var G__4470__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__4470 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4470__delegate.call(this, args);
};
G__4470.cljs$lang$maxFixedArity = 0;
G__4470.cljs$lang$applyTo = (function (arglist__4471){
var args = cljs.core.seq( arglist__4471 );;
return G__4470__delegate.call(this, args);
});
return G__4470;
})()
;
});
var partial__4466 = (function (f,arg1,arg2){
return (function() { 
var G__4472__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__4472 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4472__delegate.call(this, args);
};
G__4472.cljs$lang$maxFixedArity = 0;
G__4472.cljs$lang$applyTo = (function (arglist__4473){
var args = cljs.core.seq( arglist__4473 );;
return G__4472__delegate.call(this, args);
});
return G__4472;
})()
;
});
var partial__4467 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__4474__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__4474 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4474__delegate.call(this, args);
};
G__4474.cljs$lang$maxFixedArity = 0;
G__4474.cljs$lang$applyTo = (function (arglist__4475){
var args = cljs.core.seq( arglist__4475 );;
return G__4474__delegate.call(this, args);
});
return G__4474;
})()
;
});
var partial__4468 = (function() { 
var G__4476__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__4477__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__4477 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4477__delegate.call(this, args);
};
G__4477.cljs$lang$maxFixedArity = 0;
G__4477.cljs$lang$applyTo = (function (arglist__4478){
var args = cljs.core.seq( arglist__4478 );;
return G__4477__delegate.call(this, args);
});
return G__4477;
})()
;
};
var G__4476 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4476__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__4476.cljs$lang$maxFixedArity = 4;
G__4476.cljs$lang$applyTo = (function (arglist__4479){
var f = cljs.core.first(arglist__4479);
var arg1 = cljs.core.first(cljs.core.next(arglist__4479));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4479)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4479))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4479))));
return G__4476__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__4476;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__4465.call(this,f,arg1);
case  3 :
return partial__4466.call(this,f,arg1,arg2);
case  4 :
return partial__4467.call(this,f,arg1,arg2,arg3);
default:
return partial__4468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__4468.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__4480 = (function (f,x){
return (function() {
var G__4484 = null;
var G__4484__4485 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__4484__4486 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__4484__4487 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__4484__4488 = (function() { 
var G__4490__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__4490 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4490__delegate.call(this, a, b, c, ds);
};
G__4490.cljs$lang$maxFixedArity = 3;
G__4490.cljs$lang$applyTo = (function (arglist__4491){
var a = cljs.core.first(arglist__4491);
var b = cljs.core.first(cljs.core.next(arglist__4491));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4491)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4491)));
return G__4490__delegate.call(this, a, b, c, ds);
});
return G__4490;
})()
;
G__4484 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__4484__4485.call(this,a);
case  2 :
return G__4484__4486.call(this,a,b);
case  3 :
return G__4484__4487.call(this,a,b,c);
default:
return G__4484__4488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4484.cljs$lang$maxFixedArity = 3;
G__4484.cljs$lang$applyTo = G__4484__4488.cljs$lang$applyTo;
return G__4484;
})()
});
var fnil__4481 = (function (f,x,y){
return (function() {
var G__4492 = null;
var G__4492__4493 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__4492__4494 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__4492__4495 = (function() { 
var G__4497__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__4497 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4497__delegate.call(this, a, b, c, ds);
};
G__4497.cljs$lang$maxFixedArity = 3;
G__4497.cljs$lang$applyTo = (function (arglist__4498){
var a = cljs.core.first(arglist__4498);
var b = cljs.core.first(cljs.core.next(arglist__4498));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4498)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4498)));
return G__4497__delegate.call(this, a, b, c, ds);
});
return G__4497;
})()
;
G__4492 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__4492__4493.call(this,a,b);
case  3 :
return G__4492__4494.call(this,a,b,c);
default:
return G__4492__4495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4492.cljs$lang$maxFixedArity = 3;
G__4492.cljs$lang$applyTo = G__4492__4495.cljs$lang$applyTo;
return G__4492;
})()
});
var fnil__4482 = (function (f,x,y,z){
return (function() {
var G__4499 = null;
var G__4499__4500 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__4499__4501 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__4499__4502 = (function() { 
var G__4504__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__4504 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4504__delegate.call(this, a, b, c, ds);
};
G__4504.cljs$lang$maxFixedArity = 3;
G__4504.cljs$lang$applyTo = (function (arglist__4505){
var a = cljs.core.first(arglist__4505);
var b = cljs.core.first(cljs.core.next(arglist__4505));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4505)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4505)));
return G__4504__delegate.call(this, a, b, c, ds);
});
return G__4504;
})()
;
G__4499 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__4499__4500.call(this,a,b);
case  3 :
return G__4499__4501.call(this,a,b,c);
default:
return G__4499__4502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4499.cljs$lang$maxFixedArity = 3;
G__4499.cljs$lang$applyTo = G__4499__4502.cljs$lang$applyTo;
return G__4499;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__4480.call(this,f,x);
case  3 :
return fnil__4481.call(this,f,x,y);
case  4 :
return fnil__4482.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__4508 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4506))
{var s__4507 = temp__3698__auto____4506;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__4507)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4507)));
} else
{return null;
}
})));
});

return mapi__4508.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4509 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4509))
{var s__4510 = temp__3698__auto____4509;

var x__4511 = f.call(null,cljs.core.first.call(null,s__4510));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__4511)))
{return keep.call(null,f,cljs.core.rest.call(null,s__4510));
} else
{return cljs.core.cons.call(null,x__4511,keep.call(null,f,cljs.core.rest.call(null,s__4510)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__4521 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4518 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4518))
{var s__4519 = temp__3698__auto____4518;

var x__4520 = f.call(null,idx,cljs.core.first.call(null,s__4519));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__4520)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4519));
} else
{return cljs.core.cons.call(null,x__4520,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4519)));
}
} else
{return null;
}
})));
});

return keepi__4521.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__4566 = (function (p){
return (function() {
var ep1 = null;
var ep1__4571 = (function (){
return true;
});
var ep1__4572 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__4573 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4528 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____4528))
{return p.call(null,y);
} else
{return and__3546__auto____4528;
}
})());
});
var ep1__4574 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4529 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____4529))
{var and__3546__auto____4530 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____4530))
{return p.call(null,z);
} else
{return and__3546__auto____4530;
}
} else
{return and__3546__auto____4529;
}
})());
});
var ep1__4575 = (function() { 
var G__4577__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4531 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4531))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____4531;
}
})());
};
var G__4577 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4577__delegate.call(this, x, y, z, args);
};
G__4577.cljs$lang$maxFixedArity = 3;
G__4577.cljs$lang$applyTo = (function (arglist__4578){
var x = cljs.core.first(arglist__4578);
var y = cljs.core.first(cljs.core.next(arglist__4578));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4578)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4578)));
return G__4577__delegate.call(this, x, y, z, args);
});
return G__4577;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__4571.call(this);
case  1 :
return ep1__4572.call(this,x);
case  2 :
return ep1__4573.call(this,x,y);
case  3 :
return ep1__4574.call(this,x,y,z);
default:
return ep1__4575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4575.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__4567 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__4579 = (function (){
return true;
});
var ep2__4580 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4532 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4532))
{return p2.call(null,x);
} else
{return and__3546__auto____4532;
}
})());
});
var ep2__4581 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4533 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4533))
{var and__3546__auto____4534 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4534))
{var and__3546__auto____4535 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4535))
{return p2.call(null,y);
} else
{return and__3546__auto____4535;
}
} else
{return and__3546__auto____4534;
}
} else
{return and__3546__auto____4533;
}
})());
});
var ep2__4582 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4536 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4536))
{var and__3546__auto____4537 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4537))
{var and__3546__auto____4538 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____4538))
{var and__3546__auto____4539 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4539))
{var and__3546__auto____4540 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4540))
{return p2.call(null,z);
} else
{return and__3546__auto____4540;
}
} else
{return and__3546__auto____4539;
}
} else
{return and__3546__auto____4538;
}
} else
{return and__3546__auto____4537;
}
} else
{return and__3546__auto____4536;
}
})());
});
var ep2__4583 = (function() { 
var G__4585__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4541 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4541))
{return cljs.core.every_QMARK_.call(null,(function (p1__4512_SHARP_){
var and__3546__auto____4542 = p1.call(null,p1__4512_SHARP_);

if(cljs.core.truth_(and__3546__auto____4542))
{return p2.call(null,p1__4512_SHARP_);
} else
{return and__3546__auto____4542;
}
}),args);
} else
{return and__3546__auto____4541;
}
})());
};
var G__4585 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4585__delegate.call(this, x, y, z, args);
};
G__4585.cljs$lang$maxFixedArity = 3;
G__4585.cljs$lang$applyTo = (function (arglist__4586){
var x = cljs.core.first(arglist__4586);
var y = cljs.core.first(cljs.core.next(arglist__4586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4586)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4586)));
return G__4585__delegate.call(this, x, y, z, args);
});
return G__4585;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__4579.call(this);
case  1 :
return ep2__4580.call(this,x);
case  2 :
return ep2__4581.call(this,x,y);
case  3 :
return ep2__4582.call(this,x,y,z);
default:
return ep2__4583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4583.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__4568 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__4587 = (function (){
return true;
});
var ep3__4588 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4543 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4543))
{var and__3546__auto____4544 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4544))
{return p3.call(null,x);
} else
{return and__3546__auto____4544;
}
} else
{return and__3546__auto____4543;
}
})());
});
var ep3__4589 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4545 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4545))
{var and__3546__auto____4546 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4546))
{var and__3546__auto____4547 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____4547))
{var and__3546__auto____4548 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4548))
{var and__3546__auto____4549 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4549))
{return p3.call(null,y);
} else
{return and__3546__auto____4549;
}
} else
{return and__3546__auto____4548;
}
} else
{return and__3546__auto____4547;
}
} else
{return and__3546__auto____4546;
}
} else
{return and__3546__auto____4545;
}
})());
});
var ep3__4590 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4550 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4550))
{var and__3546__auto____4551 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4551))
{var and__3546__auto____4552 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____4552))
{var and__3546__auto____4553 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4553))
{var and__3546__auto____4554 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4554))
{var and__3546__auto____4555 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____4555))
{var and__3546__auto____4556 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____4556))
{var and__3546__auto____4557 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____4557))
{return p3.call(null,z);
} else
{return and__3546__auto____4557;
}
} else
{return and__3546__auto____4556;
}
} else
{return and__3546__auto____4555;
}
} else
{return and__3546__auto____4554;
}
} else
{return and__3546__auto____4553;
}
} else
{return and__3546__auto____4552;
}
} else
{return and__3546__auto____4551;
}
} else
{return and__3546__auto____4550;
}
})());
});
var ep3__4591 = (function() { 
var G__4593__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4558 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4558))
{return cljs.core.every_QMARK_.call(null,(function (p1__4513_SHARP_){
var and__3546__auto____4559 = p1.call(null,p1__4513_SHARP_);

if(cljs.core.truth_(and__3546__auto____4559))
{var and__3546__auto____4560 = p2.call(null,p1__4513_SHARP_);

if(cljs.core.truth_(and__3546__auto____4560))
{return p3.call(null,p1__4513_SHARP_);
} else
{return and__3546__auto____4560;
}
} else
{return and__3546__auto____4559;
}
}),args);
} else
{return and__3546__auto____4558;
}
})());
};
var G__4593 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4593__delegate.call(this, x, y, z, args);
};
G__4593.cljs$lang$maxFixedArity = 3;
G__4593.cljs$lang$applyTo = (function (arglist__4594){
var x = cljs.core.first(arglist__4594);
var y = cljs.core.first(cljs.core.next(arglist__4594));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4594)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4594)));
return G__4593__delegate.call(this, x, y, z, args);
});
return G__4593;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__4587.call(this);
case  1 :
return ep3__4588.call(this,x);
case  2 :
return ep3__4589.call(this,x,y);
case  3 :
return ep3__4590.call(this,x,y,z);
default:
return ep3__4591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4591.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__4569 = (function() { 
var G__4595__delegate = function (p1,p2,p3,ps){
var ps__4561 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__4596 = (function (){
return true;
});
var epn__4597 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__4514_SHARP_){
return p1__4514_SHARP_.call(null,x);
}),ps__4561);
});
var epn__4598 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__4515_SHARP_){
var and__3546__auto____4562 = p1__4515_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____4562))
{return p1__4515_SHARP_.call(null,y);
} else
{return and__3546__auto____4562;
}
}),ps__4561);
});
var epn__4599 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__4516_SHARP_){
var and__3546__auto____4563 = p1__4516_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____4563))
{var and__3546__auto____4564 = p1__4516_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____4564))
{return p1__4516_SHARP_.call(null,z);
} else
{return and__3546__auto____4564;
}
} else
{return and__3546__auto____4563;
}
}),ps__4561);
});
var epn__4600 = (function() { 
var G__4602__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4565 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4565))
{return cljs.core.every_QMARK_.call(null,(function (p1__4517_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__4517_SHARP_,args);
}),ps__4561);
} else
{return and__3546__auto____4565;
}
})());
};
var G__4602 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4602__delegate.call(this, x, y, z, args);
};
G__4602.cljs$lang$maxFixedArity = 3;
G__4602.cljs$lang$applyTo = (function (arglist__4603){
var x = cljs.core.first(arglist__4603);
var y = cljs.core.first(cljs.core.next(arglist__4603));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4603)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4603)));
return G__4602__delegate.call(this, x, y, z, args);
});
return G__4602;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__4596.call(this);
case  1 :
return epn__4597.call(this,x);
case  2 :
return epn__4598.call(this,x,y);
case  3 :
return epn__4599.call(this,x,y,z);
default:
return epn__4600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4600.cljs$lang$applyTo;
return epn;
})()
};
var G__4595 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4595__delegate.call(this, p1, p2, p3, ps);
};
G__4595.cljs$lang$maxFixedArity = 3;
G__4595.cljs$lang$applyTo = (function (arglist__4604){
var p1 = cljs.core.first(arglist__4604);
var p2 = cljs.core.first(cljs.core.next(arglist__4604));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4604)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4604)));
return G__4595__delegate.call(this, p1, p2, p3, ps);
});
return G__4595;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__4566.call(this,p1);
case  2 :
return every_pred__4567.call(this,p1,p2);
case  3 :
return every_pred__4568.call(this,p1,p2,p3);
default:
return every_pred__4569.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4569.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__4644 = (function (p){
return (function() {
var sp1 = null;
var sp1__4649 = (function (){
return null;
});
var sp1__4650 = (function (x){
return p.call(null,x);
});
var sp1__4651 = (function (x,y){
var or__3548__auto____4606 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4606))
{return or__3548__auto____4606;
} else
{return p.call(null,y);
}
});
var sp1__4652 = (function (x,y,z){
var or__3548__auto____4607 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4607))
{return or__3548__auto____4607;
} else
{var or__3548__auto____4608 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____4608))
{return or__3548__auto____4608;
} else
{return p.call(null,z);
}
}
});
var sp1__4653 = (function() { 
var G__4655__delegate = function (x,y,z,args){
var or__3548__auto____4609 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4609))
{return or__3548__auto____4609;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4655 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4655__delegate.call(this, x, y, z, args);
};
G__4655.cljs$lang$maxFixedArity = 3;
G__4655.cljs$lang$applyTo = (function (arglist__4656){
var x = cljs.core.first(arglist__4656);
var y = cljs.core.first(cljs.core.next(arglist__4656));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4656)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4656)));
return G__4655__delegate.call(this, x, y, z, args);
});
return G__4655;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4649.call(this);
case  1 :
return sp1__4650.call(this,x);
case  2 :
return sp1__4651.call(this,x,y);
case  3 :
return sp1__4652.call(this,x,y,z);
default:
return sp1__4653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4653.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4645 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4657 = (function (){
return null;
});
var sp2__4658 = (function (x){
var or__3548__auto____4610 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4610))
{return or__3548__auto____4610;
} else
{return p2.call(null,x);
}
});
var sp2__4659 = (function (x,y){
var or__3548__auto____4611 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4611))
{return or__3548__auto____4611;
} else
{var or__3548__auto____4612 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4612))
{return or__3548__auto____4612;
} else
{var or__3548__auto____4613 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4613))
{return or__3548__auto____4613;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4660 = (function (x,y,z){
var or__3548__auto____4614 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4614))
{return or__3548__auto____4614;
} else
{var or__3548__auto____4615 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4615))
{return or__3548__auto____4615;
} else
{var or__3548__auto____4616 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4616))
{return or__3548__auto____4616;
} else
{var or__3548__auto____4617 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4617))
{return or__3548__auto____4617;
} else
{var or__3548__auto____4618 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4618))
{return or__3548__auto____4618;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4661 = (function() { 
var G__4663__delegate = function (x,y,z,args){
var or__3548__auto____4619 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4619))
{return or__3548__auto____4619;
} else
{return cljs.core.some.call(null,(function (p1__4522_SHARP_){
var or__3548__auto____4620 = p1.call(null,p1__4522_SHARP_);

if(cljs.core.truth_(or__3548__auto____4620))
{return or__3548__auto____4620;
} else
{return p2.call(null,p1__4522_SHARP_);
}
}),args);
}
};
var G__4663 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4663__delegate.call(this, x, y, z, args);
};
G__4663.cljs$lang$maxFixedArity = 3;
G__4663.cljs$lang$applyTo = (function (arglist__4664){
var x = cljs.core.first(arglist__4664);
var y = cljs.core.first(cljs.core.next(arglist__4664));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4664)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4664)));
return G__4663__delegate.call(this, x, y, z, args);
});
return G__4663;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4657.call(this);
case  1 :
return sp2__4658.call(this,x);
case  2 :
return sp2__4659.call(this,x,y);
case  3 :
return sp2__4660.call(this,x,y,z);
default:
return sp2__4661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4661.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4646 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4665 = (function (){
return null;
});
var sp3__4666 = (function (x){
var or__3548__auto____4621 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4621))
{return or__3548__auto____4621;
} else
{var or__3548__auto____4622 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4622))
{return or__3548__auto____4622;
} else
{return p3.call(null,x);
}
}
});
var sp3__4667 = (function (x,y){
var or__3548__auto____4623 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4623))
{return or__3548__auto____4623;
} else
{var or__3548__auto____4624 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4624))
{return or__3548__auto____4624;
} else
{var or__3548__auto____4625 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4625))
{return or__3548__auto____4625;
} else
{var or__3548__auto____4626 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4626))
{return or__3548__auto____4626;
} else
{var or__3548__auto____4627 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4627))
{return or__3548__auto____4627;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4668 = (function (x,y,z){
var or__3548__auto____4628 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4628))
{return or__3548__auto____4628;
} else
{var or__3548__auto____4629 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4629))
{return or__3548__auto____4629;
} else
{var or__3548__auto____4630 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4630))
{return or__3548__auto____4630;
} else
{var or__3548__auto____4631 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4631))
{return or__3548__auto____4631;
} else
{var or__3548__auto____4632 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4632))
{return or__3548__auto____4632;
} else
{var or__3548__auto____4633 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____4633))
{return or__3548__auto____4633;
} else
{var or__3548__auto____4634 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4634))
{return or__3548__auto____4634;
} else
{var or__3548__auto____4635 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____4635))
{return or__3548__auto____4635;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4669 = (function() { 
var G__4671__delegate = function (x,y,z,args){
var or__3548__auto____4636 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4636))
{return or__3548__auto____4636;
} else
{return cljs.core.some.call(null,(function (p1__4523_SHARP_){
var or__3548__auto____4637 = p1.call(null,p1__4523_SHARP_);

if(cljs.core.truth_(or__3548__auto____4637))
{return or__3548__auto____4637;
} else
{var or__3548__auto____4638 = p2.call(null,p1__4523_SHARP_);

if(cljs.core.truth_(or__3548__auto____4638))
{return or__3548__auto____4638;
} else
{return p3.call(null,p1__4523_SHARP_);
}
}
}),args);
}
};
var G__4671 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4671__delegate.call(this, x, y, z, args);
};
G__4671.cljs$lang$maxFixedArity = 3;
G__4671.cljs$lang$applyTo = (function (arglist__4672){
var x = cljs.core.first(arglist__4672);
var y = cljs.core.first(cljs.core.next(arglist__4672));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4672)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4672)));
return G__4671__delegate.call(this, x, y, z, args);
});
return G__4671;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4665.call(this);
case  1 :
return sp3__4666.call(this,x);
case  2 :
return sp3__4667.call(this,x,y);
case  3 :
return sp3__4668.call(this,x,y,z);
default:
return sp3__4669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4669.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4647 = (function() { 
var G__4673__delegate = function (p1,p2,p3,ps){
var ps__4639 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4674 = (function (){
return null;
});
var spn__4675 = (function (x){
return cljs.core.some.call(null,(function (p1__4524_SHARP_){
return p1__4524_SHARP_.call(null,x);
}),ps__4639);
});
var spn__4676 = (function (x,y){
return cljs.core.some.call(null,(function (p1__4525_SHARP_){
var or__3548__auto____4640 = p1__4525_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4640))
{return or__3548__auto____4640;
} else
{return p1__4525_SHARP_.call(null,y);
}
}),ps__4639);
});
var spn__4677 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__4526_SHARP_){
var or__3548__auto____4641 = p1__4526_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4641))
{return or__3548__auto____4641;
} else
{var or__3548__auto____4642 = p1__4526_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____4642))
{return or__3548__auto____4642;
} else
{return p1__4526_SHARP_.call(null,z);
}
}
}),ps__4639);
});
var spn__4678 = (function() { 
var G__4680__delegate = function (x,y,z,args){
var or__3548__auto____4643 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4643))
{return or__3548__auto____4643;
} else
{return cljs.core.some.call(null,(function (p1__4527_SHARP_){
return cljs.core.some.call(null,p1__4527_SHARP_,args);
}),ps__4639);
}
};
var G__4680 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4680__delegate.call(this, x, y, z, args);
};
G__4680.cljs$lang$maxFixedArity = 3;
G__4680.cljs$lang$applyTo = (function (arglist__4681){
var x = cljs.core.first(arglist__4681);
var y = cljs.core.first(cljs.core.next(arglist__4681));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4681)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4681)));
return G__4680__delegate.call(this, x, y, z, args);
});
return G__4680;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4674.call(this);
case  1 :
return spn__4675.call(this,x);
case  2 :
return spn__4676.call(this,x,y);
case  3 :
return spn__4677.call(this,x,y,z);
default:
return spn__4678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4678.cljs$lang$applyTo;
return spn;
})()
};
var G__4673 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4673__delegate.call(this, p1, p2, p3, ps);
};
G__4673.cljs$lang$maxFixedArity = 3;
G__4673.cljs$lang$applyTo = (function (arglist__4682){
var p1 = cljs.core.first(arglist__4682);
var p2 = cljs.core.first(cljs.core.next(arglist__4682));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4682)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4682)));
return G__4673__delegate.call(this, p1, p2, p3, ps);
});
return G__4673;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4644.call(this,p1);
case  2 :
return some_fn__4645.call(this,p1,p2);
case  3 :
return some_fn__4646.call(this,p1,p2,p3);
default:
return some_fn__4647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4647.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__4695 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4683 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4683))
{var s__4684 = temp__3698__auto____4683;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4684)),map.call(null,f,cljs.core.rest.call(null,s__4684)));
} else
{return null;
}
})));
});
var map__4696 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4685 = cljs.core.seq.call(null,c1);
var s2__4686 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4687 = s1__4685;

if(cljs.core.truth_(and__3546__auto____4687))
{return s2__4686;
} else
{return and__3546__auto____4687;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4685),cljs.core.first.call(null,s2__4686)),map.call(null,f,cljs.core.rest.call(null,s1__4685),cljs.core.rest.call(null,s2__4686)));
} else
{return null;
}
})));
});
var map__4697 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4688 = cljs.core.seq.call(null,c1);
var s2__4689 = cljs.core.seq.call(null,c2);
var s3__4690 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4691 = s1__4688;

if(cljs.core.truth_(and__3546__auto____4691))
{var and__3546__auto____4692 = s2__4689;

if(cljs.core.truth_(and__3546__auto____4692))
{return s3__4690;
} else
{return and__3546__auto____4692;
}
} else
{return and__3546__auto____4691;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4688),cljs.core.first.call(null,s2__4689),cljs.core.first.call(null,s3__4690)),map.call(null,f,cljs.core.rest.call(null,s1__4688),cljs.core.rest.call(null,s2__4689),cljs.core.rest.call(null,s3__4690)));
} else
{return null;
}
})));
});
var map__4698 = (function() { 
var G__4700__delegate = function (f,c1,c2,c3,colls){
var step__4694 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4693 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4693)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4693),step.call(null,map.call(null,cljs.core.rest,ss__4693)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__4605_SHARP_){
return cljs.core.apply.call(null,f,p1__4605_SHARP_);
}),step__4694.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4700 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4700__delegate.call(this, f, c1, c2, c3, colls);
};
G__4700.cljs$lang$maxFixedArity = 4;
G__4700.cljs$lang$applyTo = (function (arglist__4701){
var f = cljs.core.first(arglist__4701);
var c1 = cljs.core.first(cljs.core.next(arglist__4701));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4701)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4701))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4701))));
return G__4700__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4700;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4695.call(this,f,c1);
case  3 :
return map__4696.call(this,f,c1,c2);
case  4 :
return map__4697.call(this,f,c1,c2,c3);
default:
return map__4698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4698.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____4702 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4702))
{var s__4703 = temp__3698__auto____4702;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4703),take.call(null,(n - 1),cljs.core.rest.call(null,s__4703)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__4706 = (function (n,coll){
while(true){
var s__4704 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4705 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4705))
{return s__4704;
} else
{return and__3546__auto____4705;
}
})()))
{{
var G__4707 = (n - 1);
var G__4708 = cljs.core.rest.call(null,s__4704);
n = G__4707;
coll = G__4708;
continue;
}
} else
{return s__4704;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4706.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4709 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4710 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4709.call(this,n);
case  2 :
return drop_last__4710.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__4712 = cljs.core.seq.call(null,coll);
var lead__4713 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4713))
{{
var G__4714 = cljs.core.next.call(null,s__4712);
var G__4715 = cljs.core.next.call(null,lead__4713);
s__4712 = G__4714;
lead__4713 = G__4715;
continue;
}
} else
{return s__4712;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4718 = (function (pred,coll){
while(true){
var s__4716 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4717 = s__4716;

if(cljs.core.truth_(and__3546__auto____4717))
{return pred.call(null,cljs.core.first.call(null,s__4716));
} else
{return and__3546__auto____4717;
}
})()))
{{
var G__4719 = pred;
var G__4720 = cljs.core.rest.call(null,s__4716);
pred = G__4719;
coll = G__4720;
continue;
}
} else
{return s__4716;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4718.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4721 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4721))
{var s__4722 = temp__3698__auto____4721;

return cljs.core.concat.call(null,s__4722,cycle.call(null,s__4722));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__4723 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4724 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4723.call(this,n);
case  2 :
return repeat__4724.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__4726 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4727 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4726.call(this,n);
case  2 :
return repeatedly__4727.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__4733 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4729 = cljs.core.seq.call(null,c1);
var s2__4730 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4731 = s1__4729;

if(cljs.core.truth_(and__3546__auto____4731))
{return s2__4730;
} else
{return and__3546__auto____4731;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4729),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4730),interleave.call(null,cljs.core.rest.call(null,s1__4729),cljs.core.rest.call(null,s2__4730))));
} else
{return null;
}
})));
});
var interleave__4734 = (function() { 
var G__4736__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4732 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4732)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4732),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4732)));
} else
{return null;
}
})));
};
var G__4736 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4736__delegate.call(this, c1, c2, colls);
};
G__4736.cljs$lang$maxFixedArity = 2;
G__4736.cljs$lang$applyTo = (function (arglist__4737){
var c1 = cljs.core.first(arglist__4737);
var c2 = cljs.core.first(cljs.core.next(arglist__4737));
var colls = cljs.core.rest(cljs.core.next(arglist__4737));
return G__4736__delegate.call(this, c1, c2, colls);
});
return G__4736;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4733.call(this,c1,c2);
default:
return interleave__4734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4734.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__4740 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4738 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4738))
{var coll__4739 = temp__3695__auto____4738;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4739),cat.call(null,cljs.core.rest.call(null,coll__4739),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4740.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4741 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4742 = (function() { 
var G__4744__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4744 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4744__delegate.call(this, f, coll, colls);
};
G__4744.cljs$lang$maxFixedArity = 2;
G__4744.cljs$lang$applyTo = (function (arglist__4745){
var f = cljs.core.first(arglist__4745);
var coll = cljs.core.first(cljs.core.next(arglist__4745));
var colls = cljs.core.rest(cljs.core.next(arglist__4745));
return G__4744__delegate.call(this, f, coll, colls);
});
return G__4744;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4741.call(this,f,coll);
default:
return mapcat__4742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4742.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4746 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4746))
{var s__4747 = temp__3698__auto____4746;

var f__4748 = cljs.core.first.call(null,s__4747);
var r__4749 = cljs.core.rest.call(null,s__4747);

if(cljs.core.truth_(pred.call(null,f__4748)))
{return cljs.core.cons.call(null,f__4748,filter.call(null,pred,r__4749));
} else
{return filter.call(null,pred,r__4749);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__4751 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4751.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4750_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4750_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__4758 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4759 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4752 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4752))
{var s__4753 = temp__3698__auto____4752;

var p__4754 = cljs.core.take.call(null,n,s__4753);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4754))))
{return cljs.core.cons.call(null,p__4754,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4753)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4760 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4755 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4755))
{var s__4756 = temp__3698__auto____4755;

var p__4757 = cljs.core.take.call(null,n,s__4756);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4757))))
{return cljs.core.cons.call(null,p__4757,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4756)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4757,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4758.call(this,n,step);
case  3 :
return partition__4759.call(this,n,step,pad);
case  4 :
return partition__4760.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__4766 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4767 = (function (m,ks,not_found){
var sentinel__4762 = cljs.core.lookup_sentinel;
var m__4763 = m;
var ks__4764 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4764))
{var m__4765 = cljs.core.get.call(null,m__4763,cljs.core.first.call(null,ks__4764),sentinel__4762);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__4762,m__4765)))
{return not_found;
} else
{{
var G__4769 = sentinel__4762;
var G__4770 = m__4765;
var G__4771 = cljs.core.next.call(null,ks__4764);
sentinel__4762 = G__4769;
m__4763 = G__4770;
ks__4764 = G__4771;
continue;
}
}
} else
{return m__4763;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4766.call(this,m,ks);
case  3 :
return get_in__4767.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__4772,v){
var vec__4773__4774 = p__4772;
var k__4775 = cljs.core.nth.call(null,vec__4773__4774,0,null);
var ks__4776 = cljs.core.nthnext.call(null,vec__4773__4774,1);

if(cljs.core.truth_(ks__4776))
{return cljs.core.assoc.call(null,m,k__4775,assoc_in.call(null,cljs.core.get.call(null,m,k__4775),ks__4776,v));
} else
{return cljs.core.assoc.call(null,m,k__4775,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__4777,f,args){
var vec__4778__4779 = p__4777;
var k__4780 = cljs.core.nth.call(null,vec__4778__4779,0,null);
var ks__4781 = cljs.core.nthnext.call(null,vec__4778__4779,1);

if(cljs.core.truth_(ks__4781))
{return cljs.core.assoc.call(null,m,k__4780,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4780),ks__4781,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4780,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4780),args));
}
};
var update_in = function (m,p__4777,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4777, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4782){
var m = cljs.core.first(arglist__4782);
var p__4777 = cljs.core.first(cljs.core.next(arglist__4782));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4782)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4782)));
return update_in__delegate.call(this, m, p__4777, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4783 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4808 = null;
var G__4808__4809 = (function (coll,k){
var this__4784 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4808__4810 = (function (coll,k,not_found){
var this__4785 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4808 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4808__4809.call(this,coll,k);
case  3 :
return G__4808__4810.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4808;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4786 = this;
var new_array__4787 = cljs.core.aclone.call(null,this__4786.array);

(new_array__4787[k] = v);
return (new cljs.core.Vector(this__4786.meta,new_array__4787));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4788 = this;
var new_array__4789 = cljs.core.aclone.call(null,this__4788.array);

new_array__4789.push(o);
return (new cljs.core.Vector(this__4788.meta,new_array__4789));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4812 = null;
var G__4812__4813 = (function (v,f){
var this__4790 = this;
return cljs.core.ci_reduce.call(null,this__4790.array,f);
});
var G__4812__4814 = (function (v,f,start){
var this__4791 = this;
return cljs.core.ci_reduce.call(null,this__4791.array,f,start);
});
G__4812 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4812__4813.call(this,v,f);
case  3 :
return G__4812__4814.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4812;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4792 = this;
if(cljs.core.truth_((this__4792.array.length > 0)))
{var vector_seq__4793 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4792.array.length)))
{return cljs.core.cons.call(null,(this__4792.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4793.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4794 = this;
return this__4794.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4795 = this;
var count__4796 = this__4795.array.length;

if(cljs.core.truth_((count__4796 > 0)))
{return (this__4795.array[(count__4796 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4797 = this;
if(cljs.core.truth_((this__4797.array.length > 0)))
{var new_array__4798 = cljs.core.aclone.call(null,this__4797.array);

new_array__4798.pop();
return (new cljs.core.Vector(this__4797.meta,new_array__4798));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4799 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4800 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4801 = this;
return (new cljs.core.Vector(meta,this__4801.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4802 = this;
return this__4802.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4816 = null;
var G__4816__4817 = (function (coll,n){
var this__4803 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4804 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4804))
{return (n < this__4803.array.length);
} else
{return and__3546__auto____4804;
}
})()))
{return (this__4803.array[n]);
} else
{return null;
}
});
var G__4816__4818 = (function (coll,n,not_found){
var this__4805 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4806 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4806))
{return (n < this__4805.array.length);
} else
{return and__3546__auto____4806;
}
})()))
{return (this__4805.array[n]);
} else
{return not_found;
}
});
G__4816 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4816__4817.call(this,coll,n);
case  3 :
return G__4816__4818.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4816;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4807 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4807.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__4820 = null;
var G__4820__4821 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4820__4822 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4820 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4820__4821.call(this,_,k);
case  3 :
return G__4820__4822.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4820;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__4824){
var args = cljs.core.seq( arglist__4824 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4825 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4826 = array.length;

var i__4827 = 0;

while(true){
if(cljs.core.truth_((i__4827 < len__4826)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4827]))))
{return i__4827;
} else
{{
var G__4828 = (i__4827 + incr);
i__4827 = G__4828;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4830 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4831 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4829 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4829))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4829;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4830.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4831.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4834 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4853 = null;
var G__4853__4854 = (function (coll,k){
var this__4835 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4853__4855 = (function (coll,k,not_found){
var this__4836 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4836.strobj,(this__4836.strobj[k]),not_found);
});
G__4853 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4853__4854.call(this,coll,k);
case  3 :
return G__4853__4855.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4853;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4837 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4838 = goog.object.clone.call(null,this__4837.strobj);
var overwrite_QMARK___4839 = new_strobj__4838.hasOwnProperty(k);

(new_strobj__4838[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4839))
{return (new cljs.core.ObjMap(this__4837.meta,this__4837.keys,new_strobj__4838));
} else
{var new_keys__4840 = cljs.core.aclone.call(null,this__4837.keys);

new_keys__4840.push(k);
return (new cljs.core.ObjMap(this__4837.meta,new_keys__4840,new_strobj__4838));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4837.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4841 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4841.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4842 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4843 = this;
if(cljs.core.truth_((this__4843.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4833_SHARP_){
return cljs.core.vector.call(null,p1__4833_SHARP_,(this__4843.strobj[p1__4833_SHARP_]));
}),this__4843.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4844 = this;
return this__4844.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4845 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4846 = this;
return (new cljs.core.ObjMap(meta,this__4846.keys,this__4846.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4847 = this;
return this__4847.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4848 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4848.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4849 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4850 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4850))
{return this__4849.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4850;
}
})()))
{var new_keys__4851 = cljs.core.aclone.call(null,this__4849.keys);
var new_strobj__4852 = goog.object.clone.call(null,this__4849.strobj);

new_keys__4851.splice(cljs.core.scan_array.call(null,1,k,new_keys__4851),1);
cljs.core.js_delete.call(null,new_strobj__4852,k);
return (new cljs.core.ObjMap(this__4849.meta,new_keys__4851,new_strobj__4852));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__4858 = null;
var G__4858__4859 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4858__4860 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4858 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4858__4859.call(this,_,k);
case  3 :
return G__4858__4860.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4858;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4862 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4892 = null;
var G__4892__4893 = (function (coll,k){
var this__4863 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4892__4894 = (function (coll,k,not_found){
var this__4864 = this;
var bucket__4865 = (this__4864.hashobj[cljs.core.hash.call(null,k)]);
var i__4866 = (cljs.core.truth_(bucket__4865)?cljs.core.scan_array.call(null,2,k,bucket__4865):null);

if(cljs.core.truth_(i__4866))
{return (bucket__4865[(i__4866 + 1)]);
} else
{return not_found;
}
});
G__4892 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4892__4893.call(this,coll,k);
case  3 :
return G__4892__4894.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4892;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4867 = this;
var h__4868 = cljs.core.hash.call(null,k);
var bucket__4869 = (this__4867.hashobj[h__4868]);

if(cljs.core.truth_(bucket__4869))
{var new_bucket__4870 = cljs.core.aclone.call(null,bucket__4869);
var new_hashobj__4871 = goog.object.clone.call(null,this__4867.hashobj);

(new_hashobj__4871[h__4868] = new_bucket__4870);
var temp__3695__auto____4872 = cljs.core.scan_array.call(null,2,k,new_bucket__4870);

if(cljs.core.truth_(temp__3695__auto____4872))
{var i__4873 = temp__3695__auto____4872;

(new_bucket__4870[(i__4873 + 1)] = v);
return (new cljs.core.HashMap(this__4867.meta,this__4867.count,new_hashobj__4871));
} else
{new_bucket__4870.push(k,v);
return (new cljs.core.HashMap(this__4867.meta,(this__4867.count + 1),new_hashobj__4871));
}
} else
{var new_hashobj__4874 = goog.object.clone.call(null,this__4867.hashobj);

(new_hashobj__4874[h__4868] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4867.meta,(this__4867.count + 1),new_hashobj__4874));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4875 = this;
var bucket__4876 = (this__4875.hashobj[cljs.core.hash.call(null,k)]);
var i__4877 = (cljs.core.truth_(bucket__4876)?cljs.core.scan_array.call(null,2,k,bucket__4876):null);

if(cljs.core.truth_(i__4877))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4878 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4879 = this;
if(cljs.core.truth_((this__4879.count > 0)))
{var hashes__4880 = cljs.core.js_keys.call(null,this__4879.hashobj);

return cljs.core.mapcat.call(null,(function (p1__4857_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4879.hashobj[p1__4857_SHARP_])));
}),hashes__4880);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4881 = this;
return this__4881.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4882 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4883 = this;
return (new cljs.core.HashMap(meta,this__4883.count,this__4883.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4884 = this;
return this__4884.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4885 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4885.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4886 = this;
var h__4887 = cljs.core.hash.call(null,k);
var bucket__4888 = (this__4886.hashobj[h__4887]);
var i__4889 = (cljs.core.truth_(bucket__4888)?cljs.core.scan_array.call(null,2,k,bucket__4888):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4889)))
{return coll;
} else
{var new_hashobj__4890 = goog.object.clone.call(null,this__4886.hashobj);

if(cljs.core.truth_((3 > bucket__4888.length)))
{cljs.core.js_delete.call(null,new_hashobj__4890,h__4887);
} else
{var new_bucket__4891 = cljs.core.aclone.call(null,bucket__4888);

new_bucket__4891.splice(i__4889,2);
(new_hashobj__4890[h__4887] = new_bucket__4891);
}
return (new cljs.core.HashMap(this__4886.meta,(this__4886.count - 1),new_hashobj__4890));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4896 = ks.length;

var i__4897 = 0;
var out__4898 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4897 < len__4896)))
{{
var G__4899 = (i__4897 + 1);
var G__4900 = cljs.core.assoc.call(null,out__4898,(ks[i__4897]),(vs[i__4897]));
i__4897 = G__4899;
out__4898 = G__4900;
continue;
}
} else
{return out__4898;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__4901 = null;
var G__4901__4902 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4901__4903 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4901 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4901__4902.call(this,_,k);
case  3 :
return G__4901__4903.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4901;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4905 = cljs.core.seq.call(null,keyvals);
var out__4906 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4905))
{{
var G__4907 = cljs.core.nnext.call(null,in$__4905);
var G__4908 = cljs.core.assoc.call(null,out__4906,cljs.core.first.call(null,in$__4905),cljs.core.second.call(null,in$__4905));
in$__4905 = G__4907;
out__4906 = G__4908;
continue;
}
} else
{return out__4906;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4909){
var keyvals = cljs.core.seq( arglist__4909 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4910_SHARP_,p2__4911_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4912 = p1__4910_SHARP_;

if(cljs.core.truth_(or__3548__auto____4912))
{return or__3548__auto____4912;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4911_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4913){
var maps = cljs.core.seq( arglist__4913 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4916 = (function (m,e){
var k__4914 = cljs.core.first.call(null,e);
var v__4915 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4914)))
{return cljs.core.assoc.call(null,m,k__4914,f.call(null,cljs.core.get.call(null,m,k__4914),v__4915));
} else
{return cljs.core.assoc.call(null,m,k__4914,v__4915);
}
});
var merge2__4918 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4916,(function (){var or__3548__auto____4917 = m1;

if(cljs.core.truth_(or__3548__auto____4917))
{return or__3548__auto____4917;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4918,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4919){
var f = cljs.core.first(arglist__4919);
var maps = cljs.core.rest(arglist__4919);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4921 = cljs.core.ObjMap.fromObject([],{});
var keys__4922 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4922))
{var key__4923 = cljs.core.first.call(null,keys__4922);
var entry__4924 = cljs.core.get.call(null,map,key__4923,"﷐'user/not-found");

{
var G__4925 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4924,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__4921,key__4923,entry__4924):ret__4921);
var G__4926 = cljs.core.next.call(null,keys__4922);
ret__4921 = G__4925;
keys__4922 = G__4926;
continue;
}
} else
{return ret__4921;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4927 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4940 = null;
var G__4940__4941 = (function (coll,v){
var this__4928 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4940__4942 = (function (coll,v,not_found){
var this__4929 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4929.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4940 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4940__4941.call(this,coll,v);
case  3 :
return G__4940__4942.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4940;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4930 = this;
return (new cljs.core.Set(this__4930.meta,cljs.core.assoc.call(null,this__4930.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4931 = this;
return cljs.core.keys.call(null,this__4931.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4932 = this;
return (new cljs.core.Set(this__4932.meta,cljs.core.dissoc.call(null,this__4932.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4933 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4934 = this;
var and__3546__auto____4935 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4935))
{var and__3546__auto____4936 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4936))
{return cljs.core.every_QMARK_.call(null,(function (p1__4920_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4920_SHARP_);
}),other);
} else
{return and__3546__auto____4936;
}
} else
{return and__3546__auto____4935;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4937 = this;
return (new cljs.core.Set(meta,this__4937.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4938 = this;
return this__4938.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4939 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4939.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__4944 = null;
var G__4944__4945 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4944__4946 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4944 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4944__4945.call(this,_,k);
case  3 :
return G__4944__4946.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4944;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4949 = cljs.core.seq.call(null,coll);
var out__4950 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4949))))
{{
var G__4951 = cljs.core.rest.call(null,in$__4949);
var G__4952 = cljs.core.conj.call(null,out__4950,cljs.core.first.call(null,in$__4949));
in$__4949 = G__4951;
out__4950 = G__4952;
continue;
}
} else
{return out__4950;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4953 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4954 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4954))
{var e__4955 = temp__3695__auto____4954;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4955));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4953,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4948_SHARP_){
var temp__3695__auto____4956 = cljs.core.find.call(null,smap,p1__4948_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4956))
{var e__4957 = temp__3695__auto____4956;

return cljs.core.second.call(null,e__4957);
} else
{return p1__4948_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4965 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4958,seen){
while(true){
var vec__4959__4960 = p__4958;
var f__4961 = cljs.core.nth.call(null,vec__4959__4960,0,null);
var xs__4962 = vec__4959__4960;

var temp__3698__auto____4963 = cljs.core.seq.call(null,xs__4962);

if(cljs.core.truth_(temp__3698__auto____4963))
{var s__4964 = temp__3698__auto____4963;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4961)))
{{
var G__4966 = cljs.core.rest.call(null,s__4964);
var G__4967 = seen;
p__4958 = G__4966;
seen = G__4967;
continue;
}
} else
{return cljs.core.cons.call(null,f__4961,step.call(null,cljs.core.rest.call(null,s__4964),cljs.core.conj.call(null,seen,f__4961)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4965.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4968 = cljs.core.Vector.fromArray([]);
var s__4969 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4969)))
{{
var G__4970 = cljs.core.conj.call(null,ret__4968,cljs.core.first.call(null,s__4969));
var G__4971 = cljs.core.next.call(null,s__4969);
ret__4968 = G__4970;
s__4969 = G__4971;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4968);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4972 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4972))
{return or__3548__auto____4972;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4973 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4973 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4973 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4974 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4974))
{return or__3548__auto____4974;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4975 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4975 > -1)))
{return cljs.core.subs.call(null,x,2,i__4975);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4978 = cljs.core.ObjMap.fromObject([],{});
var ks__4979 = cljs.core.seq.call(null,keys);
var vs__4980 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4981 = ks__4979;

if(cljs.core.truth_(and__3546__auto____4981))
{return vs__4980;
} else
{return and__3546__auto____4981;
}
})()))
{{
var G__4982 = cljs.core.assoc.call(null,map__4978,cljs.core.first.call(null,ks__4979),cljs.core.first.call(null,vs__4980));
var G__4983 = cljs.core.next.call(null,ks__4979);
var G__4984 = cljs.core.next.call(null,vs__4980);
map__4978 = G__4982;
ks__4979 = G__4983;
vs__4980 = G__4984;
continue;
}
} else
{return map__4978;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4987 = (function (k,x){
return x;
});
var max_key__4988 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4989 = (function() { 
var G__4991__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4976_SHARP_,p2__4977_SHARP_){
return max_key.call(null,k,p1__4976_SHARP_,p2__4977_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4991 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4991__delegate.call(this, k, x, y, more);
};
G__4991.cljs$lang$maxFixedArity = 3;
G__4991.cljs$lang$applyTo = (function (arglist__4992){
var k = cljs.core.first(arglist__4992);
var x = cljs.core.first(cljs.core.next(arglist__4992));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4992)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4992)));
return G__4991__delegate.call(this, k, x, y, more);
});
return G__4991;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4987.call(this,k,x);
case  3 :
return max_key__4988.call(this,k,x,y);
default:
return max_key__4989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4989.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4993 = (function (k,x){
return x;
});
var min_key__4994 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4995 = (function() { 
var G__4997__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4985_SHARP_,p2__4986_SHARP_){
return min_key.call(null,k,p1__4985_SHARP_,p2__4986_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4997 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4997__delegate.call(this, k, x, y, more);
};
G__4997.cljs$lang$maxFixedArity = 3;
G__4997.cljs$lang$applyTo = (function (arglist__4998){
var k = cljs.core.first(arglist__4998);
var x = cljs.core.first(cljs.core.next(arglist__4998));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4998)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4998)));
return G__4997__delegate.call(this, k, x, y, more);
});
return G__4997;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4993.call(this,k,x);
case  3 :
return min_key__4994.call(this,k,x,y);
default:
return min_key__4995.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4995.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__5001 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__5002 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4999 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4999))
{var s__5000 = temp__3698__auto____4999;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__5000),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__5000)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__5001.call(this,n,step);
case  3 :
return partition_all__5002.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5004 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5004))
{var s__5005 = temp__3698__auto____5004;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__5005))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5005),take_while.call(null,pred,cljs.core.rest.call(null,s__5005)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__5006 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__5007 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5023 = null;
var G__5023__5024 = (function (rng,f){
var this__5008 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__5023__5025 = (function (rng,f,s){
var this__5009 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__5023 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__5023__5024.call(this,rng,f);
case  3 :
return G__5023__5025.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5023;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__5010 = this;
var comp__5011 = (cljs.core.truth_((this__5010.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__5011.call(null,this__5010.start,this__5010.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__5012 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__5012.end - this__5012.start) / this__5012.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__5013 = this;
return this__5013.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__5014 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__5014.meta,(this__5014.start + this__5014.step),this__5014.end,this__5014.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__5015 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__5016 = this;
return (new cljs.core.Range(meta,this__5016.start,this__5016.end,this__5016.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__5017 = this;
return this__5017.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5027 = null;
var G__5027__5028 = (function (rng,n){
var this__5018 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__5018.start + (n * this__5018.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____5019 = (this__5018.start > this__5018.end);

if(cljs.core.truth_(and__3546__auto____5019))
{return cljs.core._EQ_.call(null,this__5018.step,0);
} else
{return and__3546__auto____5019;
}
})()))
{return this__5018.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__5027__5029 = (function (rng,n,not_found){
var this__5020 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__5020.start + (n * this__5020.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____5021 = (this__5020.start > this__5020.end);

if(cljs.core.truth_(and__3546__auto____5021))
{return cljs.core._EQ_.call(null,this__5020.step,0);
} else
{return and__3546__auto____5021;
}
})()))
{return this__5020.start;
} else
{return not_found;
}
}
});
G__5027 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__5027__5028.call(this,rng,n);
case  3 :
return G__5027__5029.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5027;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__5022 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5022.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__5031 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__5032 = (function (end){
return range.call(null,0,end,1);
});
var range__5033 = (function (start,end){
return range.call(null,start,end,1);
});
var range__5034 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__5031.call(this);
case  1 :
return range__5032.call(this,start);
case  2 :
return range__5033.call(this,start,end);
case  3 :
return range__5034.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5036 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5036))
{var s__5037 = temp__3698__auto____5036;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__5037),take_nth.call(null,n,cljs.core.drop.call(null,n,s__5037)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5039 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5039))
{var s__5040 = temp__3698__auto____5039;

var fst__5041 = cljs.core.first.call(null,s__5040);
var fv__5042 = f.call(null,fst__5041);
var run__5043 = cljs.core.cons.call(null,fst__5041,cljs.core.take_while.call(null,(function (p1__5038_SHARP_){
return cljs.core._EQ_.call(null,fv__5042,f.call(null,p1__5038_SHARP_));
}),cljs.core.next.call(null,s__5040)));

return cljs.core.cons.call(null,run__5043,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__5043),s__5040))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__5058 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____5054 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____5054))
{var s__5055 = temp__3695__auto____5054;

return reductions.call(null,f,cljs.core.first.call(null,s__5055),cljs.core.rest.call(null,s__5055));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__5059 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____5056 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____5056))
{var s__5057 = temp__3698__auto____5056;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__5057)),cljs.core.rest.call(null,s__5057));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__5058.call(this,f,init);
case  3 :
return reductions__5059.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__5062 = (function (f){
return (function() {
var G__5067 = null;
var G__5067__5068 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__5067__5069 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__5067__5070 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__5067__5071 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__5067__5072 = (function() { 
var G__5074__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__5074 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5074__delegate.call(this, x, y, z, args);
};
G__5074.cljs$lang$maxFixedArity = 3;
G__5074.cljs$lang$applyTo = (function (arglist__5075){
var x = cljs.core.first(arglist__5075);
var y = cljs.core.first(cljs.core.next(arglist__5075));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5075)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5075)));
return G__5074__delegate.call(this, x, y, z, args);
});
return G__5074;
})()
;
G__5067 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5067__5068.call(this);
case  1 :
return G__5067__5069.call(this,x);
case  2 :
return G__5067__5070.call(this,x,y);
case  3 :
return G__5067__5071.call(this,x,y,z);
default:
return G__5067__5072.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5067.cljs$lang$maxFixedArity = 3;
G__5067.cljs$lang$applyTo = G__5067__5072.cljs$lang$applyTo;
return G__5067;
})()
});
var juxt__5063 = (function (f,g){
return (function() {
var G__5076 = null;
var G__5076__5077 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__5076__5078 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__5076__5079 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__5076__5080 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__5076__5081 = (function() { 
var G__5083__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5083 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5083__delegate.call(this, x, y, z, args);
};
G__5083.cljs$lang$maxFixedArity = 3;
G__5083.cljs$lang$applyTo = (function (arglist__5084){
var x = cljs.core.first(arglist__5084);
var y = cljs.core.first(cljs.core.next(arglist__5084));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5084)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5084)));
return G__5083__delegate.call(this, x, y, z, args);
});
return G__5083;
})()
;
G__5076 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5076__5077.call(this);
case  1 :
return G__5076__5078.call(this,x);
case  2 :
return G__5076__5079.call(this,x,y);
case  3 :
return G__5076__5080.call(this,x,y,z);
default:
return G__5076__5081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5076.cljs$lang$maxFixedArity = 3;
G__5076.cljs$lang$applyTo = G__5076__5081.cljs$lang$applyTo;
return G__5076;
})()
});
var juxt__5064 = (function (f,g,h){
return (function() {
var G__5085 = null;
var G__5085__5086 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__5085__5087 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__5085__5088 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__5085__5089 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__5085__5090 = (function() { 
var G__5092__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__5092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5092__delegate.call(this, x, y, z, args);
};
G__5092.cljs$lang$maxFixedArity = 3;
G__5092.cljs$lang$applyTo = (function (arglist__5093){
var x = cljs.core.first(arglist__5093);
var y = cljs.core.first(cljs.core.next(arglist__5093));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5093)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5093)));
return G__5092__delegate.call(this, x, y, z, args);
});
return G__5092;
})()
;
G__5085 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5085__5086.call(this);
case  1 :
return G__5085__5087.call(this,x);
case  2 :
return G__5085__5088.call(this,x,y);
case  3 :
return G__5085__5089.call(this,x,y,z);
default:
return G__5085__5090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5085.cljs$lang$maxFixedArity = 3;
G__5085.cljs$lang$applyTo = G__5085__5090.cljs$lang$applyTo;
return G__5085;
})()
});
var juxt__5065 = (function() { 
var G__5094__delegate = function (f,g,h,fs){
var fs__5061 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__5095 = null;
var G__5095__5096 = (function (){
return cljs.core.reduce.call(null,(function (p1__5044_SHARP_,p2__5045_SHARP_){
return cljs.core.conj.call(null,p1__5044_SHARP_,p2__5045_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__5061);
});
var G__5095__5097 = (function (x){
return cljs.core.reduce.call(null,(function (p1__5046_SHARP_,p2__5047_SHARP_){
return cljs.core.conj.call(null,p1__5046_SHARP_,p2__5047_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__5061);
});
var G__5095__5098 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__5048_SHARP_,p2__5049_SHARP_){
return cljs.core.conj.call(null,p1__5048_SHARP_,p2__5049_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__5061);
});
var G__5095__5099 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__5050_SHARP_,p2__5051_SHARP_){
return cljs.core.conj.call(null,p1__5050_SHARP_,p2__5051_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__5061);
});
var G__5095__5100 = (function() { 
var G__5102__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__5052_SHARP_,p2__5053_SHARP_){
return cljs.core.conj.call(null,p1__5052_SHARP_,cljs.core.apply.call(null,p2__5053_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__5061);
};
var G__5102 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5102__delegate.call(this, x, y, z, args);
};
G__5102.cljs$lang$maxFixedArity = 3;
G__5102.cljs$lang$applyTo = (function (arglist__5103){
var x = cljs.core.first(arglist__5103);
var y = cljs.core.first(cljs.core.next(arglist__5103));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5103)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5103)));
return G__5102__delegate.call(this, x, y, z, args);
});
return G__5102;
})()
;
G__5095 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5095__5096.call(this);
case  1 :
return G__5095__5097.call(this,x);
case  2 :
return G__5095__5098.call(this,x,y);
case  3 :
return G__5095__5099.call(this,x,y,z);
default:
return G__5095__5100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5095.cljs$lang$maxFixedArity = 3;
G__5095.cljs$lang$applyTo = G__5095__5100.cljs$lang$applyTo;
return G__5095;
})()
};
var G__5094 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5094__delegate.call(this, f, g, h, fs);
};
G__5094.cljs$lang$maxFixedArity = 3;
G__5094.cljs$lang$applyTo = (function (arglist__5104){
var f = cljs.core.first(arglist__5104);
var g = cljs.core.first(cljs.core.next(arglist__5104));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5104)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5104)));
return G__5094__delegate.call(this, f, g, h, fs);
});
return G__5094;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__5062.call(this,f);
case  2 :
return juxt__5063.call(this,f,g);
case  3 :
return juxt__5064.call(this,f,g,h);
default:
return juxt__5065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__5065.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__5106 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__5109 = cljs.core.next.call(null,coll);
coll = G__5109;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__5107 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____5105 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____5105))
{return (n > 0);
} else
{return and__3546__auto____5105;
}
})()))
{{
var G__5110 = (n - 1);
var G__5111 = cljs.core.next.call(null,coll);
n = G__5110;
coll = G__5111;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__5106.call(this,n);
case  2 :
return dorun__5107.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__5112 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__5113 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__5112.call(this,n);
case  2 :
return doall__5113.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__5115 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__5115),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__5115),1)))
{return cljs.core.first.call(null,matches__5115);
} else
{return cljs.core.vec.call(null,matches__5115);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__5116 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__5116)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__5116),1)))
{return cljs.core.first.call(null,matches__5116);
} else
{return cljs.core.vec.call(null,matches__5116);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__5117 = cljs.core.re_find.call(null,re,s);
var match_idx__5118 = s.search(re);
var match_str__5119 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__5117))?cljs.core.first.call(null,match_data__5117):match_data__5117);
var post_match__5120 = cljs.core.subs.call(null,s,(match_idx__5118 + cljs.core.count.call(null,match_str__5119)));

if(cljs.core.truth_(match_data__5117))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__5117,re_seq.call(null,re,post_match__5120));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__5121_SHARP_){
return print_one.call(null,p1__5121_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____5122 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____5122))
{var and__3546__auto____5126 = (function (){var x__316__auto____5123 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____5124 = x__316__auto____5123;

if(cljs.core.truth_(and__3546__auto____5124))
{var and__3546__auto____5125 = x__316__auto____5123.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____5125))
{return cljs.core.not.call(null,x__316__auto____5123.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____5125;
}
} else
{return and__3546__auto____5124;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__316__auto____5123);
}
})();

if(cljs.core.truth_(and__3546__auto____5126))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____5126;
}
} else
{return and__3546__auto____5122;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__316__auto____5127 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____5128 = x__316__auto____5127;

if(cljs.core.truth_(and__3546__auto____5128))
{var and__3546__auto____5129 = x__316__auto____5127.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____5129))
{return cljs.core.not.call(null,x__316__auto____5127.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____5129;
}
} else
{return and__3546__auto____5128;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__316__auto____5127);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__5130 = cljs.core.first.call(null,objs);
var sb__5131 = (new goog.string.StringBuffer());

var G__5132__5133 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__5132__5133))
{var obj__5134 = cljs.core.first.call(null,G__5132__5133);
var G__5132__5135 = G__5132__5133;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__5134,first_obj__5130)))
{} else
{sb__5131.append(" ");
}
var G__5136__5137 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5134,opts));

if(cljs.core.truth_(G__5136__5137))
{var string__5138 = cljs.core.first.call(null,G__5136__5137);
var G__5136__5139 = G__5136__5137;

while(true){
sb__5131.append(string__5138);
var temp__3698__auto____5140 = cljs.core.next.call(null,G__5136__5139);

if(cljs.core.truth_(temp__3698__auto____5140))
{var G__5136__5141 = temp__3698__auto____5140;

{
var G__5144 = cljs.core.first.call(null,G__5136__5141);
var G__5145 = G__5136__5141;
string__5138 = G__5144;
G__5136__5139 = G__5145;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____5142 = cljs.core.next.call(null,G__5132__5135);

if(cljs.core.truth_(temp__3698__auto____5142))
{var G__5132__5143 = temp__3698__auto____5142;

{
var G__5146 = cljs.core.first.call(null,G__5132__5143);
var G__5147 = G__5132__5143;
obj__5134 = G__5146;
G__5132__5135 = G__5147;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__5131);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__5148 = cljs.core.first.call(null,objs);

var G__5149__5150 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__5149__5150))
{var obj__5151 = cljs.core.first.call(null,G__5149__5150);
var G__5149__5152 = G__5149__5150;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__5151,first_obj__5148)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__5153__5154 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5151,opts));

if(cljs.core.truth_(G__5153__5154))
{var string__5155 = cljs.core.first.call(null,G__5153__5154);
var G__5153__5156 = G__5153__5154;

while(true){
cljs.core.string_print.call(null,string__5155);
var temp__3698__auto____5157 = cljs.core.next.call(null,G__5153__5156);

if(cljs.core.truth_(temp__3698__auto____5157))
{var G__5153__5158 = temp__3698__auto____5157;

{
var G__5161 = cljs.core.first.call(null,G__5153__5158);
var G__5162 = G__5153__5158;
string__5155 = G__5161;
G__5153__5156 = G__5162;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____5159 = cljs.core.next.call(null,G__5149__5152);

if(cljs.core.truth_(temp__3698__auto____5159))
{var G__5149__5160 = temp__3698__auto____5159;

{
var G__5163 = cljs.core.first.call(null,G__5149__5160);
var G__5164 = G__5149__5160;
obj__5151 = G__5163;
G__5149__5152 = G__5164;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__5165){
var objs = cljs.core.seq( arglist__5165 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__5166){
var objs = cljs.core.seq( arglist__5166 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__5167){
var objs = cljs.core.seq( arglist__5167 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__5168){
var objs = cljs.core.seq( arglist__5168 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__5169){
var objs = cljs.core.seq( arglist__5169 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__5170 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5170,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____5171 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____5171))
{var nspc__5172 = temp__3698__auto____5171;

return cljs.core.str.call(null,nspc__5172,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____5173 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____5173))
{var nspc__5174 = temp__3698__auto____5173;

return cljs.core.str.call(null,nspc__5174,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__5175 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5175,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__5176 = this;
var G__5177__5178 = cljs.core.seq.call(null,this__5176.watches);

if(cljs.core.truth_(G__5177__5178))
{var G__5180__5182 = cljs.core.first.call(null,G__5177__5178);
var vec__5181__5183 = G__5180__5182;
var key__5184 = cljs.core.nth.call(null,vec__5181__5183,0,null);
var f__5185 = cljs.core.nth.call(null,vec__5181__5183,1,null);
var G__5177__5186 = G__5177__5178;

var G__5180__5187 = G__5180__5182;
var G__5177__5188 = G__5177__5186;

while(true){
var vec__5189__5190 = G__5180__5187;
var key__5191 = cljs.core.nth.call(null,vec__5189__5190,0,null);
var f__5192 = cljs.core.nth.call(null,vec__5189__5190,1,null);
var G__5177__5193 = G__5177__5188;

f__5192.call(null,key__5191,this$,oldval,newval);
var temp__3698__auto____5194 = cljs.core.next.call(null,G__5177__5193);

if(cljs.core.truth_(temp__3698__auto____5194))
{var G__5177__5195 = temp__3698__auto____5194;

{
var G__5202 = cljs.core.first.call(null,G__5177__5195);
var G__5203 = G__5177__5195;
G__5180__5187 = G__5202;
G__5177__5188 = G__5203;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__5196 = this;
return this$.watches = cljs.core.assoc.call(null,this__5196.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__5197 = this;
return this$.watches = cljs.core.dissoc.call(null,this__5197.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__5198 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__5198.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__5199 = this;
return this__5199.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5200 = this;
return this__5200.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__5201 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__5210 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__5211 = (function() { 
var G__5213__delegate = function (x,p__5204){
var map__5205__5206 = p__5204;
var map__5205__5207 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5205__5206))?cljs.core.apply.call(null,cljs.core.hash_map,map__5205__5206):map__5205__5206);
var validator__5208 = cljs.core.get.call(null,map__5205__5207,"﷐'validator");
var meta__5209 = cljs.core.get.call(null,map__5205__5207,"﷐'meta");

return (new cljs.core.Atom(x,meta__5209,validator__5208,null));
};
var G__5213 = function (x,var_args){
var p__5204 = null;
if (goog.isDef(var_args)) {
  p__5204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5213__delegate.call(this, x, p__5204);
};
G__5213.cljs$lang$maxFixedArity = 1;
G__5213.cljs$lang$applyTo = (function (arglist__5214){
var x = cljs.core.first(arglist__5214);
var p__5204 = cljs.core.rest(arglist__5214);
return G__5213__delegate.call(this, x, p__5204);
});
return G__5213;
})()
;
atom = function(x,var_args){
var p__5204 = var_args;
switch(arguments.length){
case  1 :
return atom__5210.call(this,x);
default:
return atom__5211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__5211.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____5215 = a.validator;

if(cljs.core.truth_(temp__3698__auto____5215))
{var validate__5216 = temp__3698__auto____5215;

if(cljs.core.truth_(validate__5216.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")))));
}
} else
{}
var old_value__5217 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__5217,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___5218 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___5219 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___5220 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5221 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___5222 = (function() { 
var G__5224__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__5224 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5224__delegate.call(this, a, f, x, y, z, more);
};
G__5224.cljs$lang$maxFixedArity = 5;
G__5224.cljs$lang$applyTo = (function (arglist__5225){
var a = cljs.core.first(arglist__5225);
var f = cljs.core.first(cljs.core.next(arglist__5225));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5225)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5225))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5225)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5225)))));
return G__5224__delegate.call(this, a, f, x, y, z, more);
});
return G__5224;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___5218.call(this,a,f);
case  3 :
return swap_BANG___5219.call(this,a,f,x);
case  4 :
return swap_BANG___5220.call(this,a,f,x,y);
case  5 :
return swap_BANG___5221.call(this,a,f,x,y,z);
default:
return swap_BANG___5222.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5222.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__5226){
var iref = cljs.core.first(arglist__5226);
var f = cljs.core.first(cljs.core.next(arglist__5226));
var args = cljs.core.rest(cljs.core.next(arglist__5226));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__5227 = (function (){
return gensym.call(null,"G__");
});
var gensym__5228 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__5227.call(this);
case  1 :
return gensym__5228.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__5230 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__5230.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5231 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__5231.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__5231.state,this__5231.f);
}
return cljs.core.deref.call(null,this__5231.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__5232){
var body = cljs.core.seq( arglist__5232 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__5233__5234 = options;
var map__5233__5235 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5233__5234))?cljs.core.apply.call(null,cljs.core.hash_map,map__5233__5234):map__5233__5234);
var keywordize_keys__5236 = cljs.core.get.call(null,map__5233__5235,"﷐'keywordize-keys");
var keyfn__5237 = (cljs.core.truth_(keywordize_keys__5236)?cljs.core.keyword:cljs.core.str);
var f__5243 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__380__auto____5242 = (function iter__5238(s__5239){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5239__5240 = s__5239;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5239__5240)))
{var k__5241 = cljs.core.first.call(null,s__5239__5240);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__5237.call(null,k__5241),thisfn.call(null,(x[k__5241]))]),iter__5238.call(null,cljs.core.rest.call(null,s__5239__5240)));
} else
{return null;
}
break;
}
})));
});

return iter__380__auto____5242.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__5243.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__5244){
var x = cljs.core.first(arglist__5244);
var options = cljs.core.rest(arglist__5244);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__5245 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__5249__delegate = function (args){
var temp__3695__auto____5246 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__5245),args);

if(cljs.core.truth_(temp__3695__auto____5246))
{var v__5247 = temp__3695__auto____5246;

return v__5247;
} else
{var ret__5248 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__5245,cljs.core.assoc,args,ret__5248);
return ret__5248;
}
};
var G__5249 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5249__delegate.call(this, args);
};
G__5249.cljs$lang$maxFixedArity = 0;
G__5249.cljs$lang$applyTo = (function (arglist__5250){
var args = cljs.core.seq( arglist__5250 );;
return G__5249__delegate.call(this, args);
});
return G__5249;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__5252 = (function (f){
while(true){
var ret__5251 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__5251)))
{{
var G__5255 = ret__5251;
f = G__5255;
continue;
}
} else
{return ret__5251;
}
break;
}
});
var trampoline__5253 = (function() { 
var G__5256__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__5256 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5256__delegate.call(this, f, args);
};
G__5256.cljs$lang$maxFixedArity = 1;
G__5256.cljs$lang$applyTo = (function (arglist__5257){
var f = cljs.core.first(arglist__5257);
var args = cljs.core.rest(arglist__5257);
return G__5256__delegate.call(this, f, args);
});
return G__5256;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__5252.call(this,f);
default:
return trampoline__5253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__5253.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5258 = (function (){
return rand.call(null,1);
});
var rand__5259 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5258.call(this);
case  1 :
return rand__5259.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__5261 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__5261,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__5261,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___5270 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___5271 = (function (h,child,parent){
var or__3548__auto____5262 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____5262))
{return or__3548__auto____5262;
} else
{var or__3548__auto____5263 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____5263))
{return or__3548__auto____5263;
} else
{var and__3546__auto____5264 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____5264))
{var and__3546__auto____5265 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____5265))
{var and__3546__auto____5266 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____5266))
{var ret__5267 = true;
var i__5268 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____5269 = cljs.core.not.call(null,ret__5267);

if(cljs.core.truth_(or__3548__auto____5269))
{return or__3548__auto____5269;
} else
{return cljs.core._EQ_.call(null,i__5268,cljs.core.count.call(null,parent));
}
})()))
{return ret__5267;
} else
{{
var G__5273 = isa_QMARK_.call(null,h,child.call(null,i__5268),parent.call(null,i__5268));
var G__5274 = (i__5268 + 1);
ret__5267 = G__5273;
i__5268 = G__5274;
continue;
}
}
break;
}
} else
{return and__3546__auto____5266;
}
} else
{return and__3546__auto____5265;
}
} else
{return and__3546__auto____5264;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___5270.call(this,h,child);
case  3 :
return isa_QMARK___5271.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__5275 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__5276 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__5275.call(this,h);
case  2 :
return parents__5276.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__5278 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__5279 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__5278.call(this,h);
case  2 :
return ancestors__5279.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__5281 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__5282 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__5281.call(this,h);
case  2 :
return descendants__5282.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__5292 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__5293 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")))));
}
var tp__5287 = "﷐'parents".call(null,h);
var td__5288 = "﷐'descendants".call(null,h);
var ta__5289 = "﷐'ancestors".call(null,h);
var tf__5290 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____5291 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__5287.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__5289.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__5289.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__5287,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__5290.call(null,"﷐'ancestors".call(null,h),tag,td__5288,parent,ta__5289),"﷐'descendants":tf__5290.call(null,"﷐'descendants".call(null,h),parent,ta__5289,tag,td__5288)});
})());

if(cljs.core.truth_(or__3548__auto____5291))
{return or__3548__auto____5291;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__5292.call(this,h,tag);
case  3 :
return derive__5293.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__5299 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__5300 = (function (h,tag,parent){
var parentMap__5295 = "﷐'parents".call(null,h);
var childsParents__5296 = (cljs.core.truth_(parentMap__5295.call(null,tag))?cljs.core.disj.call(null,parentMap__5295.call(null,tag),parent):cljs.core.set([]));
var newParents__5297 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__5296))?cljs.core.assoc.call(null,parentMap__5295,tag,childsParents__5296):cljs.core.dissoc.call(null,parentMap__5295,tag));
var deriv_seq__5298 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__5284_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__5284_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__5284_SHARP_),cljs.core.second.call(null,p1__5284_SHARP_)));
}),cljs.core.seq.call(null,newParents__5297)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__5295.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__5285_SHARP_,p2__5286_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__5285_SHARP_,p2__5286_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__5298));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__5299.call(this,h,tag);
case  3 :
return underive__5300.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__5302 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____5304 = (cljs.core.truth_((function (){var and__3546__auto____5303 = xprefs__5302;

if(cljs.core.truth_(and__3546__auto____5303))
{return xprefs__5302.call(null,y);
} else
{return and__3546__auto____5303;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____5304))
{return or__3548__auto____5304;
} else
{var or__3548__auto____5306 = (function (){var ps__5305 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__5305) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__5305),prefer_table)))
{} else
{}
{
var G__5309 = cljs.core.rest.call(null,ps__5305);
ps__5305 = G__5309;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____5306))
{return or__3548__auto____5306;
} else
{var or__3548__auto____5308 = (function (){var ps__5307 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__5307) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__5307),y,prefer_table)))
{} else
{}
{
var G__5310 = cljs.core.rest.call(null,ps__5307);
ps__5307 = G__5310;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____5308))
{return or__3548__auto____5308;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____5311 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____5311))
{return or__3548__auto____5311;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__5320 = cljs.core.reduce.call(null,(function (be,p__5312){
var vec__5313__5314 = p__5312;
var k__5315 = cljs.core.nth.call(null,vec__5313__5314,0,null);
var ___5316 = cljs.core.nth.call(null,vec__5313__5314,1,null);
var e__5317 = vec__5313__5314;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__5315)))
{var be2__5319 = (cljs.core.truth_((function (){var or__3548__auto____5318 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____5318))
{return or__3548__auto____5318;
} else
{return cljs.core.dominates.call(null,k__5315,cljs.core.first.call(null,be),prefer_table);
}
})())?e__5317:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__5319),k__5315,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__5315," and ",cljs.core.first.call(null,be2__5319),", and neither is preferred")));
}
return be2__5319;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__5320))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__5320));
return cljs.core.second.call(null,best_entry__5320);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____5321 = mf;

if(cljs.core.truth_(and__3546__auto____5321))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____5321;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____5322 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5322))
{return or__3548__auto____5322;
} else
{var or__3548__auto____5323 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____5323))
{return or__3548__auto____5323;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____5324 = mf;

if(cljs.core.truth_(and__3546__auto____5324))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____5324;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____5325 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5325))
{return or__3548__auto____5325;
} else
{var or__3548__auto____5326 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____5326))
{return or__3548__auto____5326;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____5327 = mf;

if(cljs.core.truth_(and__3546__auto____5327))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____5327;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____5328 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5328))
{return or__3548__auto____5328;
} else
{var or__3548__auto____5329 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____5329))
{return or__3548__auto____5329;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____5330 = mf;

if(cljs.core.truth_(and__3546__auto____5330))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____5330;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____5331 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5331))
{return or__3548__auto____5331;
} else
{var or__3548__auto____5332 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____5332))
{return or__3548__auto____5332;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____5333 = mf;

if(cljs.core.truth_(and__3546__auto____5333))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____5333;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____5334 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5334))
{return or__3548__auto____5334;
} else
{var or__3548__auto____5335 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____5335))
{return or__3548__auto____5335;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____5336 = mf;

if(cljs.core.truth_(and__3546__auto____5336))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____5336;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____5337 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5337))
{return or__3548__auto____5337;
} else
{var or__3548__auto____5338 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____5338))
{return or__3548__auto____5338;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____5339 = mf;

if(cljs.core.truth_(and__3546__auto____5339))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____5339;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____5340 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5340))
{return or__3548__auto____5340;
} else
{var or__3548__auto____5341 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____5341))
{return or__3548__auto____5341;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____5342 = mf;

if(cljs.core.truth_(and__3546__auto____5342))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____5342;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____5343 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5343))
{return or__3548__auto____5343;
} else
{var or__3548__auto____5344 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5344))
{return or__3548__auto____5344;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__5345 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__5346 = cljs.core._get_method.call(null,mf,dispatch_val__5345);

if(cljs.core.truth_(target_fn__5346))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__5345)));
}
return cljs.core.apply.call(null,target_fn__5346,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__5347 = this;
cljs.core.swap_BANG_.call(null,this__5347.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5347.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5347.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5347.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__5348 = this;
cljs.core.swap_BANG_.call(null,this__5348.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__5348.method_cache,this__5348.method_table,this__5348.cached_hierarchy,this__5348.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__5349 = this;
cljs.core.swap_BANG_.call(null,this__5349.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__5349.method_cache,this__5349.method_table,this__5349.cached_hierarchy,this__5349.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__5350 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__5350.cached_hierarchy),cljs.core.deref.call(null,this__5350.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__5350.method_cache,this__5350.method_table,this__5350.cached_hierarchy,this__5350.hierarchy);
}
var temp__3695__auto____5351 = cljs.core.deref.call(null,this__5350.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____5351))
{var target_fn__5352 = temp__3695__auto____5351;

return target_fn__5352;
} else
{var temp__3695__auto____5353 = cljs.core.find_and_cache_best_method.call(null,this__5350.name,dispatch_val,this__5350.hierarchy,this__5350.method_table,this__5350.prefer_table,this__5350.method_cache,this__5350.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____5353))
{var target_fn__5354 = temp__3695__auto____5353;

return target_fn__5354;
} else
{return cljs.core.deref.call(null,this__5350.method_table).call(null,this__5350.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__5355 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__5355.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__5355.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__5355.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__5355.method_cache,this__5355.method_table,this__5355.cached_hierarchy,this__5355.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__5356 = this;
return cljs.core.deref.call(null,this__5356.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__5357 = this;
return cljs.core.deref.call(null,this__5357.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__5358 = this;
return cljs.core.do_invoke.call(null,mf,this__5358.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__5359__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__5359 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5359__delegate.call(this, _, args);
};
G__5359.cljs$lang$maxFixedArity = 1;
G__5359.cljs$lang$applyTo = (function (arglist__5360){
var _ = cljs.core.first(arglist__5360);
var args = cljs.core.rest(arglist__5360);
return G__5359__delegate.call(this, _, args);
});
return G__5359;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
