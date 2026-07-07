# 🚀 Node.js + Mongoose Error Cheat Sheet

## 1. ValidationError

### Meaning
Schema validation failed.

### Example

```text
ValidationError: favorite validation failed:
homeId: Path `homeId` is required.
```

### Cause

```js
const fav = new Favorite({});
```

Schema:

```js
homeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
}
```

### Fix

```js
const fav = new Favorite({
    homeId: homeId
});
```

---

# 2. CastError

## Meaning

Wrong datatype passed to Mongoose.

### Example

```text
CastError:
Cast to ObjectId failed for value
"{ houseId: '687fa6...' }"
at path "_id"
```

### Wrong

```js
Favorite.findByIdAndDelete({
    houseId: homeId
});
```

### Correct

```js
Favorite.findByIdAndDelete(homeId);
```

OR

```js
Favorite.findOneAndDelete({
    houseId: homeId
});
```

---

# 3. TypeError

## Meaning

Trying to use a method on undefined or null.

### Example

```text
TypeError:
registeredHomes.forEach is not a function
```

### Wrong

```js
registeredHomes.forEach(...)
```

when

```js
registeredHomes = {}
```

### Fix

```js
console.log(Array.isArray(registeredHomes));
console.log(registeredHomes);
```

---

# 4. ReferenceError

## Meaning

Variable doesn't exist.

### Example

```text
ReferenceError:
favoritesHomes is not defined
```

### Wrong

```js
const favoriteHomes = [];

console.log(favoritesHomes);
```

### Correct

```js
console.log(favoriteHomes);
```

---

# 5. SyntaxError

## Meaning

Code syntax is invalid.

### Example

```js
if (){
```

Missing condition.

---

# 6. MongoServerError

## Meaning

Database rejected the query.

### Example

```text
duplicate key error
```

Usually due to:

- Unique constraint
- Invalid collection
- Wrong query

---

# 7. Common Mongoose Methods

## find()

Returns Array

```js
Home.find();
```

---

## findOne()

Returns One Document

```js
Home.findOne({
    houseName: "Villa"
});
```

---

## findById()

Returns One Document

```js
Home.findById(id);
```

Pass only id.

---

## create()

Creates document

```js
Home.create(data);
```

---

## save()

Saves document

```js
const home = new Home(data);

home.save();
```

---

## deleteOne()

Deletes using condition

```js
Favorite.deleteOne({
    houseId: homeId
});
```

---

## findOneAndDelete()

Deletes first matching document

```js
Favorite.findOneAndDelete({
    houseId: homeId
});
```

---

## findByIdAndDelete()

Deletes by _id

```js
Favorite.findByIdAndDelete(id);
```

Pass only ObjectId.

---

# 🔥 Error Reading Formula

Always read errors from top to bottom.

Example

```text
CastError:
Cast to ObjectId failed
```

↓

Which field?

```text
path "_id"
```

↓

Which value?

```text
{ houseId: "687..." }
```

↓

What was expected?

```text
ObjectId
```

↓

Reason

```text
input must be a 24 character hex string
```

Now you know exactly where the bug is.

---

# Debugging Tips

Always print values before using them.

```js
console.log(req.body);

console.log(req.params);

console.log(req.query);

console.log(result);

console.log(Array.isArray(data));

console.log(typeof data);
```

---

# Golden Rule

✅ ValidationError → Required field missing

✅ CastError → Wrong datatype

✅ ReferenceError → Variable not found

✅ TypeError → Undefined/Null

✅ SyntaxError → Wrong JavaScript syntax

✅ MongoServerError → Database query issue

Read the first line and the last line of every stack trace first.