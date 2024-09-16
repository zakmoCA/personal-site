# notes

## project notes: JWTs refresher

### generating JWTs

JWTs are used by devs for signing and verifying traffic. the digital signing means we can trust the data and network traffic we are receiving. there are 2 types:
- signed tokens
- encrypted tokens

### when should you use JWTs?

1. authorization
  - this is the most common scenario for using JWTs
  - once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token
  - SSO, or Single Sign On is an example of a feature that widely uses JWTs
  - this is because of its small overhead and its ability to be easily used across different domains
2. information exchange
  - JWTs are a good way of securely transmitting information between parties
  - because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are
  - also since the signature is calculated using the header and the payload, you can also verify that the content hasnt been tampered with


### what are JWTs' structure?

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

- Header
- Payload
- Signature

Therefore, a JWT typically looks like the following: `xxxxx.yyyyy.zzzzz`. 

### Header

The header (typically 2 parts: token-type, and the signing algorithm) typically uses algorithms HMAC SHA256 or RSA:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload (claims): 
- claims are statements about an entity (typically, the user) and additional data
- there are three types of claims: registered, public, and private claims
  1. registered claims: predefined, not mandatory but recommended
    - provide useful, interoperable claims
  2. public claims: these can be defined at will by those using JWTs
    - however to avoid collisions they should be defined in the IANA JSON Web Token Registr
      - or they need to be defined as a URI that contains a collision resistant namespace
  3. private claims: custom claims created to share information between parties that agree on using them
    - they are *neither* registered or public claims

#### example Payload

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

------> encoded as `Base64Url` to form the second part of the JWT

### Signature:

the signature is:

1. the encoded header
2. the encoded payload
3. a secret, and lastly...
4. the algorithm specified in the header, and its all signed as such

eg. if you wanted to use the `HMAC SHA256` algorithm, the signature will be created in the following way:

```json
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

❗️ the signature is used to verify the message wasn't changed along the way
  - and, in the case of tokens signed with a private key, it can also verify that...
    - ❗️🔑 the sender of the JWT is who it says it is
  - the output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments
    - all the while its still compact when compared to XML-based standards 

**example JWT:**

this is a payload & prev header encoded JWT signed with a secret:

![example JWT](JWT.png)



we can easily generate a strong random secret for your JWT_SECRET using Node.js, and then copy it into your .env file.

```sh
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## JWT benefits

- JSON less verbose than XML, regarding alternatives Simple Web Tokens (SWT) and Security Assertion Markup Language Tokens (SAML)
  - more finely suited to HTML and HTTP environment therefore
- introducing obscure vulnerabilities when signing XML with XML Digital Signature is a concern
  - when compared to the simplicity of signing JSON its a no brainer
- JSON parsers are ubiquitous in software because they map directly to objects
- plus XML doesn't have a natural document-to-object mapping
  - more reasons workingwith JWT is a no-brainer vs than SAML assertions