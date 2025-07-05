var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  These notes are meant for a specific audience, namely the students in MTH 406 taught at Grand Valley State University in Winter 2025. Nevertheless, they are publicly available on the web, and anyone can use them in whatever way they wish.  This course is a third-semester course in linear algebra, where the first two semesters cover the content in Understanding Linear Algebra . Our aim will be to generalize some of that content by introducing vector spaces and to provide a more rigorous underpinning for some of the essential results we saw earlier.  The exposition somewhat follows that of Sheldon Axler's Linear Algebra Done Right . An additional reference is Rob Beezer's A First Course in Linear Algebra . Of course, any errors or inconsistencies are mine so please feel free to point them out.  "
},
{
  "id": "sec-vs-intro",
  "level": "1",
  "url": "sec-vs-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Vector spaces",
  "body": " Vector spaces   A vector space is simply a mathematical set on which we can perform addition and scalar multiplication. We already have some familiarity with vector spaces since is a good example. However, as mentioned in the introduction to this chapter, polynomials have similar operations so we would like to create a mathematical structure that allows us to study vectors and polynomials as equals. This is why the concept of a vector space is so useful.    Vector spaces  The usual place to get started would be with a general definition of a vector space. However, this is one place in mathematics, among others, where a general definition can obscure the underlying idea. For that reason, let's just start with some examples.   Matrices   Let's look at the set of all matrices, which include the matrices . As we saw in our earlier course, we can multiply a matrix by a scalar and we can add matrices: . Notice that both operations produce a new object that is also a matrix. We say that that the set is closed under these operations.  With these operations, the set of matrices becomes a vector space.    Notice that the entries in our matrices are real numbers . We could instead change the example so that we consider matrices whose entries are in the complex numbers .   Complex matrices   Consider now the set of matrices with complex entries. For example, . Scalar multiplication includes multiplication by complex numbers so we have .    These examples show that vector spaces have an underlying field , which is the set of scalars by which we can multiply. You may or may not know about fields depending on whether you have studied abstract algebra. In either case, the underlying field of our vector spaces will always be either the real numbers or the complex numbers, which we will write as or .  Having seen some examples, we offer a general definition of a vector space.   Vector space   A vector space over a field is a set with two operations, scalar multiplication by elements of and addition, under which is closed. Moreover, these operations satisfy the following natural properties:  Addition is commutative; that is for every pair of .  There is an additive identity; that is, there is an element such that for any element in .  Every element has an additive inverse such that . We will usually write the additive identity as .  Addition is associative, which means that we can regroup a sum in the following way: .  For every , we have .  Scalar multiplication is distributive in the sense that .      That is a long list of properties. Technically speaking, if we want to check that some set with operations is a vector space, we need to check each one of those properties. In practice, however, we will know a vector space when we see one, and we will be fairly loose with these details. We will often think of a vector space as a set that is closed under operations that are called addition and scalar multiplication and that satisfy some familiar compatibility properties.    Polynomials   If or , the set of polynomials whose coefficients are in form a vector space .     Polynomials of degree   Rather than the set of all polynomials, we define the set to be the set of all polynomials whose degree is or less. For example, contains all polynomials of degree two or less: where the coefficients are assumed to be either real or complex, as will be either specified or clear from the context.  If and , then the operations of scalar multiplication and addition are . In particular, the additive identity is .    Of course, the set of all polynomials is larger than the set of quadratic polynomials, and we have . We say that is a vector subspace of .   Vector subspace   A subset of a vector space is called a subspace of if is closed under the operations of scalar multiplication and addition that it inherits from .    Notice that a subspace is itself a vector space and that the underlying fields of and are the same.  Every vector space has two subspaces that we will sometimes need to consider, namely, the subspace consisting of only the zero vector and the entire vector space itself.   Function spaces   Let be the set of functions whose domain is and whose codomain is ; that is, functions of the form . It follows that is a complex vector space.  If and are such functions and is a complex scalar, then we define new functions and by .    If we were to consider functions , we would obtain a real vector space. This is not a subspace of , however, since the underlying fields are different. Rather, here are some natural subspaces of .    The following are subspaces of :  The set of functions for which .  If is a scalar and and are functions that satisfy , then showing that this set of functions is closed under scalar multiplication and addition.   The set of periodic functions whose period is 7; that is functions that satisfy for all .  Again, .   The set of continous functions.  The set of functions that satisfy is, however, not a subspace since it is not closed under scalar multiplication or vector addition. For instance, if , then .       >  If is a vector space and and are subspaces, then is also a subspace of as it can be seen that the interection is closed under scalar multiplication and addition. The compatibility properties are satisfied due to the fact that is itself a vector space.    When working with a vector space , we will frequently refer to the elements of as vectors even though they may be polynomials, matrices, functions, or even something entirely different.    Linear combinations  Our earlier study of linear algebra really began once we introduced linear combinations. Of course, linear combinations are defined purely in terms of scalar multiplication and addition so we can form linear combinations of elements in a vector space.    Suppose that is a set of vectors in a vector space over a field . A linear combination of these vectors is a vector of the form where the scalars belong to the field .      Consider the vector space consisting of polynomials having degree two or less and the polynomials and . We can form the linear combination .    Because we can form linear combinations, we can also think about concepts like span and linear independence.   Span   The span of a set of vectors in a vector space is the set of all linear combinations that can be formed from the set.      Consider the vector space formed by all matrices. Then consider . The span of these three matrices is the set of all possible linear combinations , which is the set of all upper triangular matrices.    It's not hard to see that the span of a set of vectors in forms a subspace. We just have to check that the span is closed under scalar multiplication and addition. So we will consider vectors . If we multiply by the scalar , we have , which is in the span of the set of vectors. Similarly, , which is also in the span. This demonstrates the following proposition.    The span of a set of vectors in is a subspace of .    We can also define linear dependence as before.   Linear independence   A set of vectors in is linearly dependent if one of the vectors can be written as a linear combination of the others.      In , consider the polynomials . This set of polynomials is linear dependent because .  Notice that this relationship can also be expressed as , which leads to the next proposition.      A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    The second statement is logically equivalent to the first so our proof will focus on the first statement. Suppose that the set is linearly dependent and that is the first vector that is a linear combination of vectors that occur previously in the list. This means that there are scalars such that . We can rewrite this expression as , which means that there are scalars with .  Conversely, suppose that for some set of scalars and that is the last nonzero scalar. We can rewrite this expression as . This shows that is a linear combination of the other vectors and that the set of vectors is therefore linearly dependent.      Suppose that is a linear dependent set of vectors and that can be written as a linear combination of the other vectors. Removing from the set does not change the span; that is, .    If , then we can replace in this expression with a linear combination of the other vectors. This shows that can be written as a linear combination of the set of vectors with removed.      Bases    A set of vectors in a vector space forms a basis for if the set is linearly independent and its span is .      We can see that the polynomials form a basis of . Notice that this statement is true for both and .  First, every polynomial in can be written as , showing that , , and span . To see that these polynomials are linearly independent, suppose that , the additivity identity in . We therefore have from which we conclude that , , and . Therefore, , , and are linearly indepedent by and hence form a basis for .      The polynomials form a basis of .  To see this, suppose that is a polynomial in . We wish to see that can be written as a linear combination of , , and . This means that there are scalars , , and such that This is a linear system of three equations in the three variables , , and , which may be written as , which has a unique solution for every vector . This says that .  Moreover, since the solution to the equation above is unique, the only linear combination must have , which means that these polynomials are linearly independent.      Consider the set of polynomials in . We claim that these polynomials form a basis for .  To see that they are linearly independent, we will suppose that they are linearly dependent and derive a contradiction. Suppose that and that some of the scalars are nonzero. Let be the last nonzero scalar so that . That is, is the only term involving . Therefore, , which contradicts our assumption that .  To see that these polynomials span , we offer a proof by induction. When , we see that spans . Now suppose that span and that is a polynomial in . Notice that the polynomials and have the same coefficient of . Therefore, is a polynomial in and can be written as a linear combination of . This means that       There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.      We say that a vector space is finite dimensional if there is a finite set whose span is . Otherwise, we say that is infinite dimensional.    Notice that any finite dimensional vector space must have a basis.    Any finite dimensional vector space has a basis consisting of a finite number of vectors.    If is a finite dimensional vector space, there is a finite set of vectors whose span is . If this set of vectors is linearly independent, then it forms a basis. It not, we can remove one vector that is a linear combination of the others. says that the span of the remaining vectors is still so we continue removing vectors one at a time until we obtain a linearly independent set, which must be a basis.    Notice that the two bases for in and both consist of three polynomials. That is, these two bases for have the same number of vectors. This is generally true as we now explain. First, we will prove a more technical, but still useful, result.    The number of vectors in a linearly independent set in the vector space is no more than the number of vectors in any set whose span is .    Suppose that is a linear independent set in the vector space and that is a set whose span is . We wish to show that .  We first construct a new list whose span is . Because the span of the vectors is , is a linear combination of the vectors, which means that this set of vectors is linearly dependent. We let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Since the set of vectors is linearly independent, is nonzero, which means that must be one of the vectors. If we remove , we have a new list whose span is by . Notice that the cardinality of this new list is still .  We can repeat this process. We prepend to the list to obtain which must be linearly dependent. Let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Once again, since the vectors form a linearly independent set, we know that is one of the vectors. We can remove to obtain a new list of vectors whose span is . Again, the cardinality of this new list is .  We continue this process until all the vectors have been added to the beginning of the list. At each step, the vector we remove is one of the vectors since the vectors are linearly independent. Therefore, we have a list of vectors that contains , which says that .      If is a finite dimensional vector space, then any two bases have the same number of vectors.    Suppose that is one basis and that is another. The set of vectors forms a linearly independent set and the set of vectors spans . By , we know that .  We can repeat this argument interchanging the two bases to conclude that . Put together, these two facts mean that .    If is a finite dimensional vector space, we define its dimension to be the number of vectors in a basis. In this case, the number of vectors in any basis is the same so this definition does not depend on which basis we choose.    If a vector space has a basis with vectors, we say that the dimension of is and write .      We have seen that is a basis for . Therefore, .      Returning to the vector space of matrices, as introduced in , we find a basis . This means that .  More generally, if , the vector space of matrices, we have .    We may informally think of the dimension of a vector space as a measure of its size. Therefore, it should follow that the dimension of a subspace cannot be larger than the dimension of the vector space in which it resides. We first call attention to a useful fact.    If is a linearly independent subset of the vector space whose span is not , then there is a vector in such that is a linearly independent subset of .    Under the assumptions of this proposition, the span of is not so there is a vector that is not in the span of the vectors. This means that it is not a linear combination of the vectors and therefore is a linearly independent set.      If is a vector space whose dimension and is a linearly independent set in , then also spans and is therefore a basis of .    We will prove this fact by contradiction. Suppose that does not span . Then by , we can add a vector so that is a linearly independent subset of vectors in . However, any linear independent subset of can have no more than vectors by , which says that must span .      If is a subspace of the finite dimensional vector space , then is also a finite dimensional vector space and .    We will first explain why is a finite dimensional vector space, which means we need to explain why there is a finite set that spans . We begin with any set of vectors in . By , we can remove vectors one at a time until we obtain a linearly independent set in . If this set does not span , then we can add vectors in one at a time to obtain new linearly independent sets in . This process must stop at some point since any linearly independent set in can have no more than vectors. Therefore, we have obtained a finite set that spans , which says that is finite dimensional.  Since any basis for is also a linearly independent subset of , it can contain no more vectors than a basis of . This tells us that .      Any linearly independent set in a finite dimensional vector space can be extended to a basis for .    Suppose that is a linearly independent set in and that is a basis for . Join the two lists together to obtain . We are guaranteed that the span of this set is . If it is not a linear independent set, then we remove the first vector that is a linear combination of the others. Since the vectors are linearly independent, the vector that is removed must be one of the vectors. Continuing in this way, we eventually obtain a basis that includes the vectors .    The following is a consequence of .    If is a subspace of and , then .    Some further conseqences of these ideas follow.    If is a finite dimensional vector space of dimension and is a set of vectors in , it follows that   if the set of vectors is linearly independent, then it is a basis.    if the span of the set of vectors is , then it is a basis.         Sums of subspaces  If we have two subspaces and in a vector space , says that the intersection is also a subspace of . The same is not true, however, for the union as demonstrated by .    Suppose that with and . If and , then consists of two lines as seen in . Notice that is not in , which shows that is not closed under addition.   The union of two subspaces is not usually a subspace.     v1=(1,1)  v2=(-1,1)         V_1    V_2          Instead, we construct a vector subspace that contains the union . This construction will be useful in the future as it helps us to break vector spaces into simpler pieces. Suppose that we have a vector space and that and are subspaces. We can define a new subspace .    Given subspaces and of , we form the vector space sum  as the subset of whose elements can be written in the form where and .      Suppose that , is the 1-dimensional subspace whose vectors are , and is the 1-dimensional subspace whose vectors are . Then is the 2-dimensional subspace whose vectors have the form .      Suppose that , is the 2-dimensional subspace having vectors , and is the 2-dimensional subspace having vectors . Then is the three-dimensional subspace consisting of vectors .      If and are subspaces of , then is also a subspace of and .    One can verify that is closed under scalar multiplication and addition, which means that it forms a subspace of .  Suppose that has a basis . Since is a subspace of , this basis can be extended to a basis for by adding vectors . Similarly, the basis for can be extended to a basis for by adding vectors . Putting all these vectors together gives the set , which we claim is a basis for .  Any vector in can be written as the sum of a vector in and a vector in . Therefore, the span of the vectors in is since contained within is a basis for and a basis for .  Moreover, the set of vectors is linearly independent. Suppose that . Rearranging this gives . The vector on the left is in but not , while the vector on the right is in . The only way this can happen is for both vectors to be zero, which means that all the coefficients must be zero.      If , we say that is the direct sum of and and denote it as .    As a consequence of , we have that     .    As a consequence of , we have    If is a subspace of , then there is another subspace such that .      If , we say that is a complement of .     "
},
{
  "id": "example-vs-matrices",
  "level": "2",
  "url": "sec-vs-intro.html#example-vs-matrices",
  "type": "Example",
  "number": "1.1.1",
  "title": "Matrices.",
  "body": " Matrices   Let's look at the set of all matrices, which include the matrices . As we saw in our earlier course, we can multiply a matrix by a scalar and we can add matrices: . Notice that both operations produce a new object that is also a matrix. We say that that the set is closed under these operations.  With these operations, the set of matrices becomes a vector space.   "
},
{
  "id": "example-vs-complex-matrices",
  "level": "2",
  "url": "sec-vs-intro.html#example-vs-complex-matrices",
  "type": "Example",
  "number": "1.1.2",
  "title": "Complex matrices.",
  "body": " Complex matrices   Consider now the set of matrices with complex entries. For example, . Scalar multiplication includes multiplication by complex numbers so we have .   "
},
{
  "id": "sec-vs-intro-3-8",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-8",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Vector space.",
  "body": " Vector space   A vector space over a field is a set with two operations, scalar multiplication by elements of and addition, under which is closed. Moreover, these operations satisfy the following natural properties:  Addition is commutative; that is for every pair of .  There is an additive identity; that is, there is an element such that for any element in .  Every element has an additive inverse such that . We will usually write the additive identity as .  Addition is associative, which means that we can regroup a sum in the following way: .  For every , we have .  Scalar multiplication is distributive in the sense that .     "
},
{
  "id": "sec-vs-intro-3-10",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-10",
  "type": "Example",
  "number": "1.1.4",
  "title": "Polynomials.",
  "body": " Polynomials   If or , the set of polynomials whose coefficients are in form a vector space .   "
},
{
  "id": "sec-vs-intro-3-11",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-11",
  "type": "Example",
  "number": "1.1.5",
  "title": "Polynomials of degree <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Polynomials of degree   Rather than the set of all polynomials, we define the set to be the set of all polynomials whose degree is or less. For example, contains all polynomials of degree two or less: where the coefficients are assumed to be either real or complex, as will be either specified or clear from the context.  If and , then the operations of scalar multiplication and addition are . In particular, the additive identity is .   "
},
{
  "id": "sec-vs-intro-3-13",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-13",
  "type": "Definition",
  "number": "1.1.6",
  "title": "Vector subspace.",
  "body": " Vector subspace   A subset of a vector space is called a subspace of if is closed under the operations of scalar multiplication and addition that it inherits from .   "
},
{
  "id": "sec-vs-intro-3-16",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-16",
  "type": "Example",
  "number": "1.1.7",
  "title": "Function spaces.",
  "body": " Function spaces   Let be the set of functions whose domain is and whose codomain is ; that is, functions of the form . It follows that is a complex vector space.  If and are such functions and is a complex scalar, then we define new functions and by .   "
},
{
  "id": "sec-vs-intro-3-18",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-3-18",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  The following are subspaces of :  The set of functions for which .  If is a scalar and and are functions that satisfy , then showing that this set of functions is closed under scalar multiplication and addition.   The set of periodic functions whose period is 7; that is functions that satisfy for all .  Again, .   The set of continous functions.  The set of functions that satisfy is, however, not a subspace since it is not closed under scalar multiplication or vector addition. For instance, if , then .      "
},
{
  "id": "example-vs-intersection",
  "level": "2",
  "url": "sec-vs-intro.html#example-vs-intersection",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": ">  If is a vector space and and are subspaces, then is also a subspace of as it can be seen that the interection is closed under scalar multiplication and addition. The compatibility properties are satisfied due to the fact that is itself a vector space.   "
},
{
  "id": "sec-vs-intro-4-3",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-3",
  "type": "Definition",
  "number": "1.1.10",
  "title": "",
  "body": "  Suppose that is a set of vectors in a vector space over a field . A linear combination of these vectors is a vector of the form where the scalars belong to the field .   "
},
{
  "id": "sec-vs-intro-4-4",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-4",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Consider the vector space consisting of polynomials having degree two or less and the polynomials and . We can form the linear combination .   "
},
{
  "id": "sec-vs-intro-4-6",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-6",
  "type": "Definition",
  "number": "1.1.12",
  "title": "Span.",
  "body": " Span   The span of a set of vectors in a vector space is the set of all linear combinations that can be formed from the set.   "
},
{
  "id": "sec-vs-intro-4-7",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-7",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": "  Consider the vector space formed by all matrices. Then consider . The span of these three matrices is the set of all possible linear combinations , which is the set of all upper triangular matrices.   "
},
{
  "id": "sec-vs-intro-4-9",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-9",
  "type": "Proposition",
  "number": "1.1.14",
  "title": "",
  "body": "  The span of a set of vectors in is a subspace of .   "
},
{
  "id": "sec-vs-intro-4-11",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-11",
  "type": "Definition",
  "number": "1.1.15",
  "title": "Linear independence.",
  "body": " Linear independence   A set of vectors in is linearly dependent if one of the vectors can be written as a linear combination of the others.   "
},
{
  "id": "sec-vs-intro-4-12",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-4-12",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "  In , consider the polynomials . This set of polynomials is linear dependent because .  Notice that this relationship can also be expressed as , which leads to the next proposition.   "
},
{
  "id": "prop-lin-indep-scalars",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-scalars",
  "type": "Proposition",
  "number": "1.1.17",
  "title": "",
  "body": "  A set of vectors in a vector space is linearly dependent if and only if for some set of scalars with at least one being nonzero.  Equivalently, the set of vectors is linearly independent if and only if implies that all the scalars .    The second statement is logically equivalent to the first so our proof will focus on the first statement. Suppose that the set is linearly dependent and that is the first vector that is a linear combination of vectors that occur previously in the list. This means that there are scalars such that . We can rewrite this expression as , which means that there are scalars with .  Conversely, suppose that for some set of scalars and that is the last nonzero scalar. We can rewrite this expression as . This shows that is a linear combination of the other vectors and that the set of vectors is therefore linearly dependent.   "
},
{
  "id": "prop-lin-dep-span",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-dep-span",
  "type": "Proposition",
  "number": "1.1.18",
  "title": "",
  "body": "  Suppose that is a linear dependent set of vectors and that can be written as a linear combination of the other vectors. Removing from the set does not change the span; that is, .    If , then we can replace in this expression with a linear combination of the other vectors. This shows that can be written as a linear combination of the set of vectors with removed.   "
},
{
  "id": "sec-vs-intro-5-2",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-2",
  "type": "Definition",
  "number": "1.1.19",
  "title": "",
  "body": "  A set of vectors in a vector space forms a basis for if the set is linearly independent and its span is .   "
},
{
  "id": "ex-poly-basis-1",
  "level": "2",
  "url": "sec-vs-intro.html#ex-poly-basis-1",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  We can see that the polynomials form a basis of . Notice that this statement is true for both and .  First, every polynomial in can be written as , showing that , , and span . To see that these polynomials are linearly independent, suppose that , the additivity identity in . We therefore have from which we conclude that , , and . Therefore, , , and are linearly indepedent by and hence form a basis for .   "
},
{
  "id": "ex-poly-basis-2",
  "level": "2",
  "url": "sec-vs-intro.html#ex-poly-basis-2",
  "type": "Example",
  "number": "1.1.21",
  "title": "",
  "body": "  The polynomials form a basis of .  To see this, suppose that is a polynomial in . We wish to see that can be written as a linear combination of , , and . This means that there are scalars , , and such that This is a linear system of three equations in the three variables , , and , which may be written as , which has a unique solution for every vector . This says that .  Moreover, since the solution to the equation above is unique, the only linear combination must have , which means that these polynomials are linearly independent.   "
},
{
  "id": "sec-vs-intro-5-5",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-5",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  Consider the set of polynomials in . We claim that these polynomials form a basis for .  To see that they are linearly independent, we will suppose that they are linearly dependent and derive a contradiction. Suppose that and that some of the scalars are nonzero. Let be the last nonzero scalar so that . That is, is the only term involving . Therefore, , which contradicts our assumption that .  To see that these polynomials span , we offer a proof by induction. When , we see that spans . Now suppose that span and that is a polynomial in . Notice that the polynomials and have the same coefficient of . Therefore, is a polynomial in and can be written as a linear combination of . This means that    "
},
{
  "id": "sec-vs-intro-5-6",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-6",
  "type": "Example",
  "number": "1.1.23",
  "title": "",
  "body": "  There is no finite set that forms a basis for , the set of all polynomials. Given any finite set, there is a polynomial having a highest degree . Therefore, the polynomial is not in the span of the set so it cannot be a basis.   "
},
{
  "id": "sec-vs-intro-5-7",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-7",
  "type": "Definition",
  "number": "1.1.24",
  "title": "",
  "body": "  We say that a vector space is finite dimensional if there is a finite set whose span is . Otherwise, we say that is infinite dimensional.   "
},
{
  "id": "sec-vs-intro-5-9",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-9",
  "type": "Proposition",
  "number": "1.1.25",
  "title": "",
  "body": "  Any finite dimensional vector space has a basis consisting of a finite number of vectors.    If is a finite dimensional vector space, there is a finite set of vectors whose span is . If this set of vectors is linearly independent, then it forms a basis. It not, we can remove one vector that is a linear combination of the others. says that the span of the remaining vectors is still so we continue removing vectors one at a time until we obtain a linearly independent set, which must be a basis.   "
},
{
  "id": "prop-lin-indep-num",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-num",
  "type": "Proposition",
  "number": "1.1.26",
  "title": "",
  "body": "  The number of vectors in a linearly independent set in the vector space is no more than the number of vectors in any set whose span is .    Suppose that is a linear independent set in the vector space and that is a set whose span is . We wish to show that .  We first construct a new list whose span is . Because the span of the vectors is , is a linear combination of the vectors, which means that this set of vectors is linearly dependent. We let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Since the set of vectors is linearly independent, is nonzero, which means that must be one of the vectors. If we remove , we have a new list whose span is by . Notice that the cardinality of this new list is still .  We can repeat this process. We prepend to the list to obtain which must be linearly dependent. Let be the first vector in the list that is a linear combination of vectors that occur previously in the list. Once again, since the vectors form a linearly independent set, we know that is one of the vectors. We can remove to obtain a new list of vectors whose span is . Again, the cardinality of this new list is .  We continue this process until all the vectors have been added to the beginning of the list. At each step, the vector we remove is one of the vectors since the vectors are linearly independent. Therefore, we have a list of vectors that contains , which says that .   "
},
{
  "id": "sec-vs-intro-5-12",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-12",
  "type": "Proposition",
  "number": "1.1.27",
  "title": "",
  "body": "  If is a finite dimensional vector space, then any two bases have the same number of vectors.    Suppose that is one basis and that is another. The set of vectors forms a linearly independent set and the set of vectors spans . By , we know that .  We can repeat this argument interchanging the two bases to conclude that . Put together, these two facts mean that .   "
},
{
  "id": "sec-vs-intro-5-14",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-14",
  "type": "Definition",
  "number": "1.1.28",
  "title": "",
  "body": "  If a vector space has a basis with vectors, we say that the dimension of is and write .   "
},
{
  "id": "sec-vs-intro-5-15",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-15",
  "type": "Example",
  "number": "1.1.29",
  "title": "",
  "body": "  We have seen that is a basis for . Therefore, .   "
},
{
  "id": "sec-vs-intro-5-16",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-16",
  "type": "Example",
  "number": "1.1.30",
  "title": "",
  "body": "  Returning to the vector space of matrices, as introduced in , we find a basis . This means that .  More generally, if , the vector space of matrices, we have .   "
},
{
  "id": "prop-lin-indep-add",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-indep-add",
  "type": "Proposition",
  "number": "1.1.31",
  "title": "",
  "body": "  If is a linearly independent subset of the vector space whose span is not , then there is a vector in such that is a linearly independent subset of .    Under the assumptions of this proposition, the span of is not so there is a vector that is not in the span of the vectors. This means that it is not a linear combination of the vectors and therefore is a linearly independent set.   "
},
{
  "id": "prop-lin-dep-full",
  "level": "2",
  "url": "sec-vs-intro.html#prop-lin-dep-full",
  "type": "Proposition",
  "number": "1.1.32",
  "title": "",
  "body": "  If is a vector space whose dimension and is a linearly independent set in , then also spans and is therefore a basis of .    We will prove this fact by contradiction. Suppose that does not span . Then by , we can add a vector so that is a linearly independent subset of vectors in . However, any linear independent subset of can have no more than vectors by , which says that must span .   "
},
{
  "id": "sec-vs-intro-5-20",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-20",
  "type": "Proposition",
  "number": "1.1.33",
  "title": "",
  "body": "  If is a subspace of the finite dimensional vector space , then is also a finite dimensional vector space and .    We will first explain why is a finite dimensional vector space, which means we need to explain why there is a finite set that spans . We begin with any set of vectors in . By , we can remove vectors one at a time until we obtain a linearly independent set in . If this set does not span , then we can add vectors in one at a time to obtain new linearly independent sets in . This process must stop at some point since any linearly independent set in can have no more than vectors. Therefore, we have obtained a finite set that spans , which says that is finite dimensional.  Since any basis for is also a linearly independent subset of , it can contain no more vectors than a basis of . This tells us that .   "
},
{
  "id": "prop-basis-extend",
  "level": "2",
  "url": "sec-vs-intro.html#prop-basis-extend",
  "type": "Proposition",
  "number": "1.1.34",
  "title": "",
  "body": "  Any linearly independent set in a finite dimensional vector space can be extended to a basis for .    Suppose that is a linearly independent set in and that is a basis for . Join the two lists together to obtain . We are guaranteed that the span of this set is . If it is not a linear independent set, then we remove the first vector that is a linear combination of the others. Since the vectors are linearly independent, the vector that is removed must be one of the vectors. Continuing in this way, we eventually obtain a basis that includes the vectors .   "
},
{
  "id": "sec-vs-intro-5-23",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-23",
  "type": "Proposition",
  "number": "1.1.35",
  "title": "",
  "body": "  If is a subspace of and , then .   "
},
{
  "id": "sec-vs-intro-5-25",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-5-25",
  "type": "Proposition",
  "number": "1.1.36",
  "title": "",
  "body": "  If is a finite dimensional vector space of dimension and is a set of vectors in , it follows that   if the set of vectors is linearly independent, then it is a basis.    if the span of the set of vectors is , then it is a basis.      "
},
{
  "id": "example-vs-union",
  "level": "2",
  "url": "sec-vs-intro.html#example-vs-union",
  "type": "Example",
  "number": "1.1.37",
  "title": "",
  "body": "  Suppose that with and . If and , then consists of two lines as seen in . Notice that is not in , which shows that is not closed under addition.   The union of two subspaces is not usually a subspace.     v1=(1,1)  v2=(-1,1)         V_1    V_2         "
},
{
  "id": "sec-vs-intro-6-5",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-5",
  "type": "Definition",
  "number": "1.1.39",
  "title": "",
  "body": "  Given subspaces and of , we form the vector space sum  as the subset of whose elements can be written in the form where and .   "
},
{
  "id": "sec-vs-intro-6-6",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-6",
  "type": "Example",
  "number": "1.1.40",
  "title": "",
  "body": "  Suppose that , is the 1-dimensional subspace whose vectors are , and is the 1-dimensional subspace whose vectors are . Then is the 2-dimensional subspace whose vectors have the form .   "
},
{
  "id": "sec-vs-intro-6-7",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-7",
  "type": "Example",
  "number": "1.1.41",
  "title": "",
  "body": "  Suppose that , is the 2-dimensional subspace having vectors , and is the 2-dimensional subspace having vectors . Then is the three-dimensional subspace consisting of vectors .   "
},
{
  "id": "prop-dim-sum",
  "level": "2",
  "url": "sec-vs-intro.html#prop-dim-sum",
  "type": "Proposition",
  "number": "1.1.42",
  "title": "",
  "body": "  If and are subspaces of , then is also a subspace of and .    One can verify that is closed under scalar multiplication and addition, which means that it forms a subspace of .  Suppose that has a basis . Since is a subspace of , this basis can be extended to a basis for by adding vectors . Similarly, the basis for can be extended to a basis for by adding vectors . Putting all these vectors together gives the set , which we claim is a basis for .  Any vector in can be written as the sum of a vector in and a vector in . Therefore, the span of the vectors in is since contained within is a basis for and a basis for .  Moreover, the set of vectors is linearly independent. Suppose that . Rearranging this gives . The vector on the left is in but not , while the vector on the right is in . The only way this can happen is for both vectors to be zero, which means that all the coefficients must be zero.   "
},
{
  "id": "sec-vs-intro-6-9",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-9",
  "type": "Definition",
  "number": "1.1.43",
  "title": "",
  "body": "  If , we say that is the direct sum of and and denote it as .   "
},
{
  "id": "sec-vs-intro-6-11",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-11",
  "type": "Proposition",
  "number": "1.1.44",
  "title": "",
  "body": "   .   "
},
{
  "id": "sec-vs-intro-6-13",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-13",
  "type": "Proposition",
  "number": "1.1.45",
  "title": "",
  "body": "  If is a subspace of , then there is another subspace such that .   "
},
{
  "id": "sec-vs-intro-6-14",
  "level": "2",
  "url": "sec-vs-intro.html#sec-vs-intro-6-14",
  "type": "Definition",
  "number": "1.1.46",
  "title": "",
  "body": "  If , we say that is a complement of .   "
},
{
  "id": "sec-lt-intro",
  "level": "1",
  "url": "sec-lt-intro.html",
  "type": "Section",
  "number": "1.2",
  "title": "Linear transformations",
  "body": " Linear transformations   We earlier viewed an matrix as defining a matrix transformation by . Due to the linearity of matrix multiplication, this meant that . Now that we are working with vector spaces, we can define linear transformations, which are functions between vector spaces that satisfy these properties.    Linear transformations  Given two vector spaces, and , we can define a linear transformation between them by generalizing our earlier notion of matrix transformation.    If and are vector spaces, then a linear transformation is a function such that, for every scalar and pair of vectors , we have .      Suppose that . Then defined by is a linear transformation.  This follows because matrix multiplication is a linear operation:       Suppose that , the set of functions . Then is a linear transformation .  To see this, we need to remember how scalar multiplication and vector addition work in . If is a scalar and and are functions, then Therefore,       Suppose that and . If is a polynomial in , define the function where is the derivative of . Two common rules of differentiation, the constant multiplier rule and the addition rule, imply that is a linear transformation.      If and , then is a linear transformation.      Suppose that is the vector space of matrices. Then by is not a linear transformation because .      Given two vector spaces, and , the set of linear transformations will be denoted as .      Notation  While a linear transformation is a function, we will frequently write , without parentheses, when we mean . This is similar to how we often write rather than in other courses.     The null space and range  A linear transformation creates a subspace of and a subspace of .    If is a linear transformation, we define the null space and range of to be .    In our earlier linear algebra courses, we considered the null space and column space of a matrix. The null space and range of a linear transformation is the same concept generalized to vector spaces.    Suppose that is a matrix and consider the linear transformation . Then is the set of solutions to the equation , which is the same as the null space .  Similarly, the column space is the set of vectors for which is consistent. In other words, is in if and only if there is a vector such that . This is precisely the definition of .      Consider the linear transformation defined by the matrix . The null space is the set of vectors for which , which we see is the subspace of spanned by and .  Similarly, is the subspace of having a basis given by and .      Suppose that and and that where . A general polynomial in has the form so that . Therefore, is the set of polynomials for which so that . This shows that .  We also have that       If , then is a subspace of and is a subspace of .    Suppose that and are in . Then we have This shows that is closed under scalar multiplication and vector addition and is therefore a subspace of .  Now suppose the and are in . We know that there are vectors and in such that and . Therefore, This shows that is closed under scalar multiplication and vector addition so is a subspace of .    The next proposition is extremely useful so we will refer to it as the Fundamental Theorem of Linear Maps .   Fundamental Theorem of Linear Maps   If is a finite dimensional vector space and is a linear transformation, then .    Suppose that is a basis for , which we extend to a basis for by adding vectors . We also define .  Given a vector in , we can write so that . This shows that span .  We also claim that forms a linearly independent set. Suppose that , which means that is in so that this vector is a linear combination of . In other words, . Since is a basis for , this set of vectors is linearly independent, which means that . Therefore, the set of vectors is linearly independent and hence a basis for .  This shows that .      The Fundamental Theorem of Linear Maps is familiar from our earlier course where we defined the rank  of a matrix to be its number of pivots. If is an matrix and the linear transformation defined by , we saw that . Therefore, , which is an expression of the Fundamental Theorem of Linear Maps.      Revisiting , we had where and . We saw that so that and that so that . Therefore, .      Suppose .   If , we say that is surjective . In particular, for every in , there is a in such that .    If , we say that is injective . In this case, if , then since , which means that is in .         Once again, these are familiar notions. Suppose that is an matrix that defines a linear transformation . Then is injective if . This happens when the columns of are linearly independent.  The transformation is surjective if , which happens when the columns of span .      The linear transformation defined by is injective but not surjective because the constant polynomials are not in .      A linear transformation is called an isomorphism if is both surjective and injective.    The following proposition follows immediately from the Fundamental Theorem of Linear Maps .    If and are finite dimensional vector spaces and , then   If is surjective, then .    If is injective, then .    If is an isomorphism, then .         Vector space isomorphisms    Consider the linear transformation defined by . If , then . This shows that and . Therefore, is a vector space isomorphism.      If is a vector space, then defined by is a linear transformation called the identity transformation.    Suppose that is an isomorphism, then every vector in has a vector in such that . In fact, there is exactly once such vector since if , we know that because is injective. In this case, we can define a function where is the vector for which .  Notice that is a linear transformation. For instance, if , then , which says that . In the same way, we have .  Therefore, we have the following proposition.    If is an ismorphism, there is a linear transformation such that , the identity transformation on , and , the identity transformation on . We call the inverse of and write .      If is an matrix and by , then is an isomorphism precisely when is invertible. In this case, .      If is a finite dimensional vector space of dimension over the field , then there is an isomorphism .    We choose a basis and define . By the linear independence of the basis, we see that is injective. Since the span of the basis vectors is , we see that is surjective.    The term isomorphism means having the same shape or structure. In other words, isomorphic vector spaces have the same structure. In our earlier courses, we considered only the vector spaces . The previous proposition, , shows us that every finite dimensional real vector space has the same structure as . This means that, technically speaking, we were also studying finite dimensional real vector spaces at the same time.  Notice, however, that the isomorphism in depends on a choice of basis. If two people choose different bases, then they will produce different isomorphisms. In fact, as we move forward, some of our work will be motivated by choosing a basis that creates a particularly nice isomorphism. Our next discussion of matrices will lay that foundation.    Representing linear transformations with matrices  says that every finite dimensional vector space is essentially the same as . Therefore, we are able to represent elements in a vector space as more typical vectors in and linear transformations as matrices. Let us make this more clear now.  Suppose that we have a basis for a finite dimensional vector space . If is an element of , then we can uniquely write . As shorthand, we will write . This should be familiar from our earlier work when we used a basis of to form a new coordinate system.    Consider the vector space with the basis . Then we have . We may think of this as a coordinate system in the vector space of polynomials.    In a similar way, we can represent linear transformations using matrices. Suppose that is a linear transformation and that we have a basis for and a basis for . We then have , which defines an matrix . In the same way we denoted the coordinates of a vector in terms of a basis, we can denote the matrix of the linear transformation . Notice that meaning that the columns of are the coordinates : .  At first glance, this notation may seem a little intimidating, but it will become clear with a little practice.    If is a linear transformation, a basis for and a basis for , we say that the matrix is the matrix associated to with respect to these bases.      Consider where . If we choose the bases and , then .     The next proposition says that the composition of linear transformations corresponds to matrix multiplication.    If and are linear transformations and , , and are bases for , , and , respectively, then .    We denote the vectors in the bases by , , and , respectively. Similarly, we use the shorthand   We have , which implies that Therefore, , which says that as expected.    A similar result holds for the coordinate representations of vectors.    Suppose that is a linear transformation and is a basis for and is a basis for . If is a vector in , then .    An important example is when the linear transformation is the identity and we have two bases and for . In this case, . This matrix then represents the change of coordinates .    Suppose that and that and . Then This matrix converts the coordinate representation of a polynomials in the basis into the coordinate representation of the same polynomial in the basis.  The inverse of this matrix will convert the -coordinate representation of a polynomial into the -coordinate representation: .  Consider the polynomial . We then have and . This means that as is easily checked.    We will often be interested in linear transformations in which the codomain and the domain are the same vector space. In this case, we say that is an operator on .    A linear transformation is called an operator on .    Given a basis for , we can then represent in terms of this basis as where the same basis is used for the codomain and domain. The following shows how the matrices representing the same transformation are represented in two bases.    Suppose that is a linear transformation and that and are two bases for . Then .    Here is a simpler way to represent this statement. If , , and , then we have . This should remind you of the kind of expression we saw when we were diagonalizing matrices and gives some idea for where we are heading. In particular, given an operator on a vector space , we would like to find a basis for so that is relatively simple, such as a diagonal matrix. The expression in can help us do that, even though that expression may look daunting.    Two square matrices and are called similar if there is a matrix such that .    Notice that a matrix is diagonalizable precisely when it is similar to a diagonal matrix.    Similarity is an equivalence relation on the set of matrices.      Suppose that and are similar matrices. If is a basis for and , then for some other basis .    In other words, two similar matrices represent the same linear transformations in two different bases. This is why we should expect that similar matrices should share important properties, such as determinants, eigenvalues, and more.  We close this section by noting that the set of linear transformations is itself a vector space.    If and are two vector spaces, then is the set of linear transformations .      If and are two vector spaces, then is a vector space. Moreover, if is a finite basis for and is a finite basis for , then the function , the vector space of matrices, by is an isomorphism. It then follows that .      Dual spaces  A special case of the vector space of linear transformations from to is when . In this case, we call the dual of .    The vector space of linear transformations is called the dual of and is denoted by . An element of is called a functional on .    Up to this point, we have typically used to denote a linear transformation. However, we often use to represent an element of the dual.    Suppose that . Then is a functional on and hence an element of the dual .  Notice that we can represent this functional in terms of the dot product if we define the vector . Then . We will later understand this example as an illustration of the Riesz Representation Theorem . More generally, any vector in defines a functional by .      If , then is a functional on .    By , we know that is a vector space and that . Therefore, if , we see that as well and given a basis for , we can construct an explicit isomorphism .  Suppose that is a basis for and that is a functional on . If is in , then we can write and hence . This shows that is determined by the vector . We therefore define the isomorphism by . We see that is an isomorphism because it is injective: if , then for all and hence for all vectors . Since is injective and , is also surjective by Fundamental Theorem of Linear Maps .    If is a finite dimensional vector space, the dual space satisfies and an isomorphism is given once we choose a basis for .      Consider with basis . Define functionals , , and by . Then any functional with satisfies .     "
},
{
  "id": "sec-lt-intro-3-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  If and are vector spaces, then a linear transformation is a function such that, for every scalar and pair of vectors , we have .   "
},
{
  "id": "sec-lt-intro-3-4",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Suppose that . Then defined by is a linear transformation.  This follows because matrix multiplication is a linear operation:    "
},
{
  "id": "sec-lt-intro-3-5",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-5",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Suppose that , the set of functions . Then is a linear transformation .  To see this, we need to remember how scalar multiplication and vector addition work in . If is a scalar and and are functions, then Therefore,    "
},
{
  "id": "sec-lt-intro-3-6",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-6",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  Suppose that and . If is a polynomial in , define the function where is the derivative of . Two common rules of differentiation, the constant multiplier rule and the addition rule, imply that is a linear transformation.   "
},
{
  "id": "sec-lt-intro-3-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-7",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": "  If and , then is a linear transformation.   "
},
{
  "id": "sec-lt-intro-3-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-8",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Suppose that is the vector space of matrices. Then by is not a linear transformation because .   "
},
{
  "id": "sec-lt-intro-3-9",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-3-9",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": "  Given two vector spaces, and , the set of linear transformations will be denoted as .   "
},
{
  "id": "sec-lt-intro-4-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-3",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": "  If is a linear transformation, we define the null space and range of to be .   "
},
{
  "id": "sec-lt-intro-4-5",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-5",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  Suppose that is a matrix and consider the linear transformation . Then is the set of solutions to the equation , which is the same as the null space .  Similarly, the column space is the set of vectors for which is consistent. In other words, is in if and only if there is a vector such that . This is precisely the definition of .   "
},
{
  "id": "sec-lt-intro-4-6",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-6",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": "  Consider the linear transformation defined by the matrix . The null space is the set of vectors for which , which we see is the subspace of spanned by and .  Similarly, is the subspace of having a basis given by and .   "
},
{
  "id": "example-lt-poly",
  "level": "2",
  "url": "sec-lt-intro.html#example-lt-poly",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  Suppose that and and that where . A general polynomial in has the form so that . Therefore, is the set of polynomials for which so that . This shows that .  We also have that    "
},
{
  "id": "sec-lt-intro-4-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-8",
  "type": "Proposition",
  "number": "1.2.12",
  "title": "",
  "body": "  If , then is a subspace of and is a subspace of .    Suppose that and are in . Then we have This shows that is closed under scalar multiplication and vector addition and is therefore a subspace of .  Now suppose the and are in . We know that there are vectors and in such that and . Therefore, This shows that is closed under scalar multiplication and vector addition so is a subspace of .   "
},
{
  "id": "prop-nul-range-dims",
  "level": "2",
  "url": "sec-lt-intro.html#prop-nul-range-dims",
  "type": "Proposition",
  "number": "1.2.13",
  "title": "Fundamental Theorem of Linear Maps.",
  "body": " Fundamental Theorem of Linear Maps   If is a finite dimensional vector space and is a linear transformation, then .    Suppose that is a basis for , which we extend to a basis for by adding vectors . We also define .  Given a vector in , we can write so that . This shows that span .  We also claim that forms a linearly independent set. Suppose that , which means that is in so that this vector is a linear combination of . In other words, . Since is a basis for , this set of vectors is linearly independent, which means that . Therefore, the set of vectors is linearly independent and hence a basis for .  This shows that .   "
},
{
  "id": "sec-lt-intro-4-11",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-11",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": "  The Fundamental Theorem of Linear Maps is familiar from our earlier course where we defined the rank  of a matrix to be its number of pivots. If is an matrix and the linear transformation defined by , we saw that . Therefore, , which is an expression of the Fundamental Theorem of Linear Maps.   "
},
{
  "id": "sec-lt-intro-4-12",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-12",
  "type": "Example",
  "number": "1.2.15",
  "title": "",
  "body": "  Revisiting , we had where and . We saw that so that and that so that . Therefore, .   "
},
{
  "id": "sec-lt-intro-4-13",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-13",
  "type": "Definition",
  "number": "1.2.16",
  "title": "",
  "body": "  Suppose .   If , we say that is surjective . In particular, for every in , there is a in such that .    If , we say that is injective . In this case, if , then since , which means that is in .      "
},
{
  "id": "sec-lt-intro-4-14",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-14",
  "type": "Example",
  "number": "1.2.17",
  "title": "",
  "body": "  Once again, these are familiar notions. Suppose that is an matrix that defines a linear transformation . Then is injective if . This happens when the columns of are linearly independent.  The transformation is surjective if , which happens when the columns of span .   "
},
{
  "id": "sec-lt-intro-4-15",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-15",
  "type": "Example",
  "number": "1.2.18",
  "title": "",
  "body": "  The linear transformation defined by is injective but not surjective because the constant polynomials are not in .   "
},
{
  "id": "sec-lt-intro-4-16",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-16",
  "type": "Definition",
  "number": "1.2.19",
  "title": "",
  "body": "  A linear transformation is called an isomorphism if is both surjective and injective.   "
},
{
  "id": "sec-lt-intro-4-18",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-4-18",
  "type": "Proposition",
  "number": "1.2.20",
  "title": "",
  "body": "  If and are finite dimensional vector spaces and , then   If is surjective, then .    If is injective, then .    If is an isomorphism, then .      "
},
{
  "id": "sec-lt-intro-5-2",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-2",
  "type": "Example",
  "number": "1.2.21",
  "title": "",
  "body": "  Consider the linear transformation defined by . If , then . This shows that and . Therefore, is a vector space isomorphism.   "
},
{
  "id": "sec-lt-intro-5-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-3",
  "type": "Example",
  "number": "1.2.22",
  "title": "",
  "body": "  If is a vector space, then defined by is a linear transformation called the identity transformation.   "
},
{
  "id": "sec-lt-intro-5-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-7",
  "type": "Proposition",
  "number": "1.2.23",
  "title": "",
  "body": "  If is an ismorphism, there is a linear transformation such that , the identity transformation on , and , the identity transformation on . We call the inverse of and write .   "
},
{
  "id": "sec-lt-intro-5-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-5-8",
  "type": "Example",
  "number": "1.2.24",
  "title": "",
  "body": "  If is an matrix and by , then is an isomorphism precisely when is invertible. In this case, .   "
},
{
  "id": "prop-fin-dim-isom",
  "level": "2",
  "url": "sec-lt-intro.html#prop-fin-dim-isom",
  "type": "Proposition",
  "number": "1.2.25",
  "title": "",
  "body": "  If is a finite dimensional vector space of dimension over the field , then there is an isomorphism .    We choose a basis and define . By the linear independence of the basis, we see that is injective. Since the span of the basis vectors is , we see that is surjective.   "
},
{
  "id": "sec-lt-intro-6-4",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-4",
  "type": "Example",
  "number": "1.2.26",
  "title": "",
  "body": "  Consider the vector space with the basis . Then we have . We may think of this as a coordinate system in the vector space of polynomials.   "
},
{
  "id": "sec-lt-intro-6-7",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-7",
  "type": "Definition",
  "number": "1.2.27",
  "title": "",
  "body": "  If is a linear transformation, a basis for and a basis for , we say that the matrix is the matrix associated to with respect to these bases.   "
},
{
  "id": "sec-lt-intro-6-8",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-8",
  "type": "Example",
  "number": "1.2.28",
  "title": "",
  "body": "  Consider where . If we choose the bases and , then .   "
},
{
  "id": "sec-lt-intro-6-10",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-10",
  "type": "Proposition",
  "number": "1.2.29",
  "title": "",
  "body": "  If and are linear transformations and , , and are bases for , , and , respectively, then .    We denote the vectors in the bases by , , and , respectively. Similarly, we use the shorthand   We have , which implies that Therefore, , which says that as expected.   "
},
{
  "id": "sec-lt-intro-6-12",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-12",
  "type": "Proposition",
  "number": "1.2.30",
  "title": "",
  "body": "  Suppose that is a linear transformation and is a basis for and is a basis for . If is a vector in , then .   "
},
{
  "id": "sec-lt-intro-6-14",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-14",
  "type": "Example",
  "number": "1.2.31",
  "title": "",
  "body": "  Suppose that and that and . Then This matrix converts the coordinate representation of a polynomials in the basis into the coordinate representation of the same polynomial in the basis.  The inverse of this matrix will convert the -coordinate representation of a polynomial into the -coordinate representation: .  Consider the polynomial . We then have and . This means that as is easily checked.   "
},
{
  "id": "sec-lt-intro-6-16",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-16",
  "type": "Definition",
  "number": "1.2.32",
  "title": "",
  "body": "  A linear transformation is called an operator on .   "
},
{
  "id": "prop-matrix-change-basis",
  "level": "2",
  "url": "sec-lt-intro.html#prop-matrix-change-basis",
  "type": "Proposition",
  "number": "1.2.33",
  "title": "",
  "body": "  Suppose that is a linear transformation and that and are two bases for . Then .   "
},
{
  "id": "sec-lt-intro-6-20",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-20",
  "type": "Definition",
  "number": "1.2.34",
  "title": "",
  "body": "  Two square matrices and are called similar if there is a matrix such that .   "
},
{
  "id": "sec-lt-intro-6-22",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-22",
  "type": "Proposition",
  "number": "1.2.35",
  "title": "",
  "body": "  Similarity is an equivalence relation on the set of matrices.   "
},
{
  "id": "sec-lt-intro-6-23",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-23",
  "type": "Proposition",
  "number": "1.2.36",
  "title": "",
  "body": "  Suppose that and are similar matrices. If is a basis for and , then for some other basis .   "
},
{
  "id": "sec-lt-intro-6-26",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-6-26",
  "type": "Definition",
  "number": "1.2.37",
  "title": "",
  "body": "  If and are two vector spaces, then is the set of linear transformations .   "
},
{
  "id": "prop-lt-vs",
  "level": "2",
  "url": "sec-lt-intro.html#prop-lt-vs",
  "type": "Proposition",
  "number": "1.2.38",
  "title": "",
  "body": "  If and are two vector spaces, then is a vector space. Moreover, if is a finite basis for and is a finite basis for , then the function , the vector space of matrices, by is an isomorphism. It then follows that .   "
},
{
  "id": "sec-lt-intro-7-3",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-3",
  "type": "Definition",
  "number": "1.2.39",
  "title": "",
  "body": "  The vector space of linear transformations is called the dual of and is denoted by . An element of is called a functional on .   "
},
{
  "id": "sec-lt-intro-7-5",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-5",
  "type": "Example",
  "number": "1.2.40",
  "title": "",
  "body": "  Suppose that . Then is a functional on and hence an element of the dual .  Notice that we can represent this functional in terms of the dot product if we define the vector . Then . We will later understand this example as an illustration of the Riesz Representation Theorem . More generally, any vector in defines a functional by .   "
},
{
  "id": "sec-lt-intro-7-6",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-6",
  "type": "Example",
  "number": "1.2.41",
  "title": "",
  "body": "  If , then is a functional on .   "
},
{
  "id": "sec-lt-intro-7-9",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-9",
  "type": "Proposition",
  "number": "1.2.42",
  "title": "",
  "body": "  If is a finite dimensional vector space, the dual space satisfies and an isomorphism is given once we choose a basis for .   "
},
{
  "id": "sec-lt-intro-7-10",
  "level": "2",
  "url": "sec-lt-intro.html#sec-lt-intro-7-10",
  "type": "Example",
  "number": "1.2.43",
  "title": "",
  "body": "  Consider with basis . Define functionals , , and by . Then any functional with satisfies .   "
},
{
  "id": "sec-orthogonal",
  "level": "1",
  "url": "sec-orthogonal.html",
  "type": "Section",
  "number": "1.3",
  "title": "Inner products",
  "body": " Inner products   In our earlier studies, we introduced the dot product to introduce a richer geometric perspective on some key ideas. In particular, we could use the dot product to detect when vectors are orthogonal, and this led to many simplifications. For instance, the inverse of a matrix whose columns form an orthonormal basis of is just the transpose of that matrix.  As we expand our study to consider more general vector spaces, we need to introduce a concept like the dot product for vector spaces. This leads us to the concept of an inner product.    Inner products  On the vector space , we introduced the dot product between two vectors: . One important property is that .  More generally, we had the following properties:   Positivity  with if and only if .   Symmetry  .   Linearity   .     Things are a little different when we are using complex numbers. If is a general complex number, then is not guaranteed to be real, much less nonnegative. To preserve the positivity condition above, remember that the complex conjugate is defined by so that if , we have . We leads us to define the dot product on so that , which means . With this definition, the three properties above still hold except that the symmetry condition is modified to .    If is a vector space, we call an inner product provided that  Positivity  and if and only if .   Conjugate symmetry  .   Linearity  .         If , then is an inner product.  In fact, this is true if as well. If is real, then so the conjugate symmetry condition is the same as the symmetry condition above.      If is the vector space of all polynomials over , then is an inner product.  This may seem strange when you first see it, but it is just an extension of the usual dot product in some sense. For instance, think of a three-dimensional vector as a function from the set into . The dot product between two vectors is then , so that we multiply the the value of and at each point and add. If we interpret the integral as an infinite sum, this is what the inner product defined above is doing.      Suppose , the vector space of matrices. If is such a matrix, we define to be its conjugate transpose. That is, . Then is an inner product, where represents the trace of a matrix, the sum of its diagonal entries.  It's relatively straightforward to show that .    It may be useful to note the following consequence of the conjugate symmetry and linearity properties: .    We typically refer to a vector space with an inner product as an inner product space .      The length or norm of a vector in an inner product space is .    With this definition, it follows that .    If and are inner product spaces and is a vector space isomorphism such that for all vectors and , we say that is an isometry of vector spaces.      Orthogonality  Since an inner product is the same concept as the dot product extended to vector spaces, we have access to many similar concepts, such as orthogonality.    Two vectors and in an inner product space are orthogonal if .      If , the set of all polynomials, with the inner product given in , then is orthogonal to . This follows because each term in is an odd power of whose integral on the interval will be zero by symmetry.  More generally, any polynomial whose terms are all of odd degree is orthogonal to any polynomials whose terms are all of even degree.     Pythagorean theorem   If and are two orthogonal vectors in an inner product space, then .    The follows from the linearity of the inner product:       In an inner product space, we say that is an orthogonal set if each vector is nonzero and each pair of vectors is orthogonal to one another.      In an inner product space, an orthogonal set is linearly independent.    Suppose that is an orthogonal set and that . If we take the inner product with for any , we have which says that .    From this, we conclude that an orthogonal set forms a basis for a subspace of the inner product space.   Projection formula   Suppose that is an orthogonal set in an inner product space and that is a vector in . The closest vector in to is called the orthogonal projection of onto and is given by .    This is the same expression as the Projection Formula that we frequently used in our previous classes and its found by the same argument.  We first find the vector so that is orthogonal to and then explain why it is the closest vector.  Notice that, by linearity, if a vector is orthogonal to each , then it is orthogonal to every vector in . This is because any vector in is a linear combination of so that and therefore .  We require that be orthogonal to so that or for all . Since is in , it can be expressed as a linear combination of : so that we have , which gives the expression for in the statement of the proposition.  Now suppose that is any other vector in . Then is in and hence orthogonal to . Therefore, by the Pythagoren theorem and hence , which shows that is closer to than any other vector in .    The Projection Formula was key to a wide range of useful concepts. In particular, we can apply the Gram-Schmidt algorithm as we did earlier.    A set of vectors is called orthonormal if each pair of vectors is orthogonal and each vector has unit length.      If is a finite dimensional subspace of an inner product space , then there is an orthonormal basis for .    We choose any basis for and then define and so on. This produces an orthogonal basis for since, at every step, .  Finally, we define to obtain an orthonormal basis for .    Notice that a vector space is a subspace of itself so the previous proposition implies that every finite dimensional subspace has an orthonormal basis.  Also, remember that any linearly independent set in can be extended to a basis of by . If we begin with an orthonormal set of vectors in , we can extend it to a basis of , and apply the Gram-Schmidt algorithm to the added basis vectors to obtain an orthonormal basis of . In other words,    Any orthonormal set in can be extended to an orthonormal basis for .      The adjoint of a linear transformation  We suppose now that and are inner product spaces over a field . If is a linear transformation, we can define its adjoint through the following relationship for every in and in . We can also write this expression as by applying the conjugate symmetry condition twice. The first thing to establish is that is itself an linear transformation.  We will first prove a useful result in the simple case that .   Riesz represenation theorem   Suppose that is an inner product space and is a linear transformation. Then there is a unique vector such that .    If , then we can take as well.  So suppose that , which means that there is a vector such that . Therefore, is onto and .  If , we know that . Choose an orthonormal basis for . We know by that we can add a vector to obtain an orthonormal basis. Let .  If is a vector in , then . Then .  To see that is unique, suppose that there are two such vectors and such that for every vector . In particular, we have for every including . Therefore, , which implies that .      If and are inner product spaces and a linear transformation, the adjoint of is defined by by or equivalently .    There are a number of things implied by this definition so we need to check that they are satisfied. The following proposition will take care of this for us.    The adjoint is a linear transformation.    We first need to establish that is a vector in for every in . For a fixed in , define the linear transformation by . By , we know there is a vector in such that so we define , which gives . We have now defined a function such that for all and . We just need to show that is a linear transformation.   We need to show that satisfies the two linearity properties. Suppose that and are vectors in . Then Since this holds for any vector , we have .  In the same way, we see that , which verifies that is an operator on .    We now relate the matrices associated to and with respect to an orthonormal basis of . As before, we use to denote an orthonormal basis of .    Suppose that and are inner product spaces with orthonormal bases and , respectively. If is a linear transformation, , and , then , the conjugate transpose of .    If and , then which says that .     Real adjoints  If the underlying field , then the matrix associated to the adjoint is just the transpose of the matrix associated to . In other words, in the notation of .     "
},
{
  "id": "sec-orthogonal-3-5",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-5",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  If is a vector space, we call an inner product provided that  Positivity  and if and only if .   Conjugate symmetry  .   Linearity  .      "
},
{
  "id": "sec-orthogonal-3-6",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-6",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  If , then is an inner product.  In fact, this is true if as well. If is real, then so the conjugate symmetry condition is the same as the symmetry condition above.   "
},
{
  "id": "example-inner-poly",
  "level": "2",
  "url": "sec-orthogonal.html#example-inner-poly",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  If is the vector space of all polynomials over , then is an inner product.  This may seem strange when you first see it, but it is just an extension of the usual dot product in some sense. For instance, think of a three-dimensional vector as a function from the set into . The dot product between two vectors is then , so that we multiply the the value of and at each point and add. If we interpret the integral as an infinite sum, this is what the inner product defined above is doing.   "
},
{
  "id": "sec-orthogonal-3-8",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-8",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Suppose , the vector space of matrices. If is such a matrix, we define to be its conjugate transpose. That is, . Then is an inner product, where represents the trace of a matrix, the sum of its diagonal entries.  It's relatively straightforward to show that .   "
},
{
  "id": "sec-orthogonal-3-10",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-10",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": "  We typically refer to a vector space with an inner product as an inner product space .   "
},
{
  "id": "sec-orthogonal-3-11",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-11",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  The length or norm of a vector in an inner product space is .   "
},
{
  "id": "sec-orthogonal-3-13",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-3-13",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  If and are inner product spaces and is a vector space isomorphism such that for all vectors and , we say that is an isometry of vector spaces.   "
},
{
  "id": "sec-orthogonal-4-3",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-3",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  Two vectors and in an inner product space are orthogonal if .   "
},
{
  "id": "sec-orthogonal-4-4",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-4",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  If , the set of all polynomials, with the inner product given in , then is orthogonal to . This follows because each term in is an odd power of whose integral on the interval will be zero by symmetry.  More generally, any polynomial whose terms are all of odd degree is orthogonal to any polynomials whose terms are all of even degree.   "
},
{
  "id": "sec-orthogonal-4-5",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-5",
  "type": "Proposition",
  "number": "1.3.10",
  "title": "Pythagorean theorem.",
  "body": " Pythagorean theorem   If and are two orthogonal vectors in an inner product space, then .    The follows from the linearity of the inner product:    "
},
{
  "id": "sec-orthogonal-4-6",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-6",
  "type": "Definition",
  "number": "1.3.11",
  "title": "",
  "body": "  In an inner product space, we say that is an orthogonal set if each vector is nonzero and each pair of vectors is orthogonal to one another.   "
},
{
  "id": "sec-orthogonal-4-7",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-7",
  "type": "Proposition",
  "number": "1.3.12",
  "title": "",
  "body": "  In an inner product space, an orthogonal set is linearly independent.    Suppose that is an orthogonal set and that . If we take the inner product with for any , we have which says that .   "
},
{
  "id": "sec-orthogonal-4-9",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-9",
  "type": "Proposition",
  "number": "1.3.13",
  "title": "Projection formula.",
  "body": " Projection formula   Suppose that is an orthogonal set in an inner product space and that is a vector in . The closest vector in to is called the orthogonal projection of onto and is given by .    This is the same expression as the Projection Formula that we frequently used in our previous classes and its found by the same argument.  We first find the vector so that is orthogonal to and then explain why it is the closest vector.  Notice that, by linearity, if a vector is orthogonal to each , then it is orthogonal to every vector in . This is because any vector in is a linear combination of so that and therefore .  We require that be orthogonal to so that or for all . Since is in , it can be expressed as a linear combination of : so that we have , which gives the expression for in the statement of the proposition.  Now suppose that is any other vector in . Then is in and hence orthogonal to . Therefore, by the Pythagoren theorem and hence , which shows that is closer to than any other vector in .   "
},
{
  "id": "sec-orthogonal-4-11",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-11",
  "type": "Definition",
  "number": "1.3.14",
  "title": "",
  "body": "  A set of vectors is called orthonormal if each pair of vectors is orthogonal and each vector has unit length.   "
},
{
  "id": "sec-orthogonal-4-12",
  "level": "2",
  "url": "sec-orthogonal.html#sec-orthogonal-4-12",
  "type": "Proposition",
  "number": "1.3.15",
  "title": "",
  "body": "  If is a finite dimensional subspace of an inner product space , then there is an orthonormal basis for .    We choose any basis for and then define and so on. This produces an orthogonal basis for since, at every step, .  Finally, we define to obtain an orthonormal basis for .   "
},
{
  "id": "prop-ortho-extend",
  "level": "2",
  "url": "sec-orthogonal.html#prop-ortho-extend",
  "type": "Proposition",
  "number": "1.3.16",
  "title": "",
  "body": "  Any orthonormal set in can be extended to an orthonormal basis for .   "
},
{
  "id": "prop-riesz",
  "level": "2",
  "url": "sec-orthogonal.html#prop-riesz",
  "type": "Proposition",
  "number": "1.3.17",
  "title": "Riesz represenation theorem.",
  "body": " Riesz represenation theorem   Suppose that is an inner product space and is a linear transformation. Then there is a unique vector such that .    If , then we can take as well.  So suppose that , which means that there is a vector such that . Therefore, is onto and .  If , we know that . Choose an orthonormal basis for . We know by that we can add a vector to obtain an orthonormal basis. Let .  If is a vector in , then . Then .  To see that is unique, suppose that there are two such vectors and such that for every vector . In particular, we have for every including . Therefore, , which implies that .   "
},
{
  "id": "subsec-adjoint-5",
  "level": "2",
  "url": "sec-orthogonal.html#subsec-adjoint-5",
  "type": "Definition",
  "number": "1.3.18",
  "title": "",
  "body": "  If and are inner product spaces and a linear transformation, the adjoint of is defined by by or equivalently .   "
},
{
  "id": "subsec-adjoint-7",
  "level": "2",
  "url": "sec-orthogonal.html#subsec-adjoint-7",
  "type": "Proposition",
  "number": "1.3.19",
  "title": "",
  "body": "  The adjoint is a linear transformation.    We first need to establish that is a vector in for every in . For a fixed in , define the linear transformation by . By , we know there is a vector in such that so we define , which gives . We have now defined a function such that for all and . We just need to show that is a linear transformation.   We need to show that satisfies the two linearity properties. Suppose that and are vectors in . Then Since this holds for any vector , we have .  In the same way, we see that , which verifies that is an operator on .   "
},
{
  "id": "prop-adjoint-matrix",
  "level": "2",
  "url": "sec-orthogonal.html#prop-adjoint-matrix",
  "type": "Proposition",
  "number": "1.3.20",
  "title": "",
  "body": "  Suppose that and are inner product spaces with orthonormal bases and , respectively. If is a linear transformation, , and , then , the conjugate transpose of .    If and , then which says that .   "
},
{
  "id": "sec-polys",
  "level": "1",
  "url": "sec-polys.html",
  "type": "Section",
  "number": "1.4",
  "title": "The minimal polynomial",
  "body": " The minimal polynomial   This section will describe some important properties about polynomials and demonstrate how they might help us understand linear transformations.  We will begin by studying familiar polynomials, such as you saw in high school algebra. For example, is a quadratic polynomial. Eventually, we will consider polynomials evaluated on an operator . For instance, evaluating on the operator produces a new operator . As a preview for how this may be useful, the polynomial leads to the operator whose null space is the set of eigenvectors associated to the eigenvalue .    Properties of Polynomials  We will be interested in polynomials that depend on a single variable, which will often be . A general polynomial has the form where are the coefficients of and are elements in either or .  The degree of a polynomial is the highest power of whose coefficient is nonzero. For example, the degree of is .  We have already seen that the set of polynomials form a vector space, which means we can multiply polynomials by scalars and we can add them. An additional operation allows us to multiply two polynomials together.    Suppose that and . We multiply polynomials term by term so that More generally, denoting the coefficients of by and the coefficients of by , the coefficients of are .     Properties of polynomial multiplication  Two important properties follow from the general expression for the coefficients of the product given in . First, the order in which we multiply polynomials is irrelevant; that is, .  Second, the degree of the product is the sum of the degrees; that is, .   Integers satisfy a property often called the Division Algorithm . Suppose that and are positive integers. Then there are integers and such that where . We say that is the quotient and is the remainder . For example, if and , then .  Polynomials satisfy a similar property also called the Division Algorithm as given in the following proposition.   The Division Algorithm   If and are polynomials, then there are unique polynomials and such that where .      Rather than proving the Division Algorithm for polynomials, we will illustrate with an example. Suppose that and .  To get started, let's consider the highest degree terms in both polynomials. For , it is while for , it is . We'd like to multiply by something to get close to . Since the ratio of the highest degree terms is , we multiply by , which gives .  Now we ask what we should multiply by to realize the term. Since the highest degree term of is , we multiply by . This means that . Since the highest degree term of is , there is nothing we can multiply by to realize the highest degree term of the right hand side. This means that we have so the quotient is and the remainder is .  This algorithm is sometimes called synthetic division and is sometimes taught in high school. We won't be actually be implementing this algorithm, but this example is meant to illustrate why is true. Implementing this algorithm for general polynomials will give a proof of the Division Algorithm.    One important implication of the Division Algorithm is the following fact that we will use quite a bit. Remember that a root of a polynomial is a value for which .   If is a root of the polynomial , then for some polynomial .   The Division Algorithm tells us that . In the notation of the Division Algorithm, and . Therefore , which means that is a constant .  Now we know that , which says that . Therefore, we have .    This proposition shows that there is a relationship between the factors of a polynomial and its roots. Polynomials with complex coefficients are special because the Fundamental Theorem of Algebra tells us that every such polynomial has a root. The proof of this theorem is outside the scope of our course, but students often see it in a course in complex analysis.   Fundamental Theorem of Algebra   If is a degree polynomial having complex coefficients, then there are roots, , possibly with repitition. This means that .    While this important theorem only holds for polynomials with complex coefficients, we can deduce something about polynomials with real coefficients. For instance, if is a polynomial with real coefficients and is a complex, non-real root, then so is its complex conjugate . This follows because . We have where and . Since this quadratic polynomial does not have real roots, we know from the quadratic formula that . Therefore,    If is a polynomial with real coefficients, there are real roots such that .      The minimal polynomial of an operator  As mentioned in the introduction to this section, our interest in polynomials stems from the insights we gain when we evaluate a polynomial on an operator . For instance, if , then a new operator. Notice that we consider the constant term to be multiplied by the identify transformation .    If is a vector subspace of and an operator, we say that is invariant under if for all .    Remember that the order in which we multiply polynomials is not important. In particular, . This leads to the following important proposition.    If is a polynomial and an operator, then both and are invariant subspaces under .    Suppose that is in , which means that . We need to explain why is also in , which leads us to .  Similarly, if is in , then there is a vector so that . Then , which shows that is also in . Therefore, is an invariant subspace of .    We now come to a crucial result for our upcoming explorations. First, we need to make the following definition clear.   A monic polynomial is a polynomial where the coefficient of the highest degree term is .   For instance, is a monic polynomial, but is not.   The minimal polynomial of an operator   Suppose that is a finite-dimensional vector space over either or and that is an operator on . There is a unique monic polynomial of smallest degree such that . Moreover, . We call this polynomial the minimal polynomial of .    Our proof proceeds by induction on the dimension of . To begin, suppose that , which means that for some vector . Then for some , which is possibly . Then , which means that since spans . Therefore, if , we have .  We now imagine that and that the theorem has been verified for all operators on vector spaces of dimension less than . We choose a vector and consider the powers ; that is, consider the vectors . Since there are vector in this set and , we know this is a linearly dependent set.  Choose to be the smallest integer such that is a linear combination of . This means two things. First, the vectors are linearly independent. Second, there are constants . If we define the degree monic polynomial , then . That is, is in .  Since is invariant under and is in , we know that are all in . These vectors are linearly independent so we know that . Therefore, .  For convenience, we will denote the vector space . Since is invariant under , is an operator on , whose dimension is less than . By the induction hypothesis, we know that there is a unique monic polynomial such that . Again by the induction hypothesis, it also follows that .  Now consider the polynomial whose degree is . Moreover, both and are monic so is also monic. Finally, for any vector in , we have where the last equality holds because is in and for any vector in . Since for every vector , this means that .  This shows that there is a monic polynomial such that on . Therefore, there is some possibly different polynomial having the smallest degree among all such polynomials, and this is the minimal polynomial of the operator on .  To see that this polynomial is unique, suppose there are two monic polynomials and having smallest degree and and . If we consider , we see that since the highest degree terms of and have coefficients and therefore cancel. Also, . However, this is impossible since and had the smallest possible degree among all polynomials that vanish when evaluated on . This means that , which guarantees the uniqueness of the minimal polynomial.      Consider the matrix and the linear operator that it defines. Notice that so if , then . The minimal polynomial of is therefore .  More generally, suppose that the minimal polynomial of an operator has degree . Since the minimal polynomial is monic, this means that . Because , we see that , a multiple of the identity.      By contrast, consider the matrix and the linear operator that it defines with respect to some basis. The degree of the minimal polynomial must be at least 2 since is not a multiple of the identity matrix. Notice, however, that and . This says that and so the minimal polynomial of is .    Both of the matrices in the two previous examples are upper triangular. Remembering that the eigenvalues of an upper triangular matrix are the entries on the diagonal, we see that the roots of the minimal polynomials in both cases are the eigenvalues of the operator. This gives some indication of the importance of the minimal polynomial, as we will see now.  The fact that the minimal polynomial has the smallest degree among all polynomials for which has some important consequences.    The set of roots of the minimal polynomial of equals the set of eigenvalues of .    Suppose that is the minimal polynomial of . We need to explain two things: that any eigenvalue of is a root of and that any root of is an eigenvalue of .  Suppose that is an eigenvalue of . This means that there is a nonzero vector such that and therefore for every . This means that , which implies that . Therefore, is a root of , the minimal polynomial of .  Conversely, suppose that is a root of . By , this means that . This says that However, since , there is some vector for which . Therefore, , which shows that is an eigenvector with associated eigenvalue .    This is the most significant fact about the minimal polynomial: that its roots are the eigenvalues of the operator. We'll put this to use in the next section. Before that, however, here are two other useful facts.    If is a polynomial for which , then is a multiple of the minimal polynomial of .    If is the minimal polynomial of , then we can apply the Division Algorithm to write where . Furthermore, , which implies that . Since has the smallest degree among all polynomials that vanish when evaluated on and has a smaller degree than , we know that . Therefore, .      If is an operator on the vector space and is a subspace of that is invariant under , then the minimal polynomial of is a multiple of the minimal polynomial of .    Suppose that is the minimal polynomial of and is the minimal polynomial of on . This means that for every vector in and so . We also know that is the minimal polynomial of so by , we know that is a multiple of .     "
},
{
  "id": "example-poly-product",
  "level": "2",
  "url": "sec-polys.html#example-poly-product",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": "  Suppose that and . We multiply polynomials term by term so that More generally, denoting the coefficients of by and the coefficients of by , the coefficients of are .   "
},
{
  "id": "prop-poly-division",
  "level": "2",
  "url": "sec-polys.html#prop-poly-division",
  "type": "Proposition",
  "number": "1.4.2",
  "title": "The Division Algorithm.",
  "body": " The Division Algorithm   If and are polynomials, then there are unique polynomials and such that where .   "
},
{
  "id": "sec-polys-3-10",
  "level": "2",
  "url": "sec-polys.html#sec-polys-3-10",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  Rather than proving the Division Algorithm for polynomials, we will illustrate with an example. Suppose that and .  To get started, let's consider the highest degree terms in both polynomials. For , it is while for , it is . We'd like to multiply by something to get close to . Since the ratio of the highest degree terms is , we multiply by , which gives .  Now we ask what we should multiply by to realize the term. Since the highest degree term of is , we multiply by . This means that . Since the highest degree term of is , there is nothing we can multiply by to realize the highest degree term of the right hand side. This means that we have so the quotient is and the remainder is .  This algorithm is sometimes called synthetic division and is sometimes taught in high school. We won't be actually be implementing this algorithm, but this example is meant to illustrate why is true. Implementing this algorithm for general polynomials will give a proof of the Division Algorithm.   "
},
{
  "id": "prop-root-factor",
  "level": "2",
  "url": "sec-polys.html#prop-root-factor",
  "type": "Proposition",
  "number": "1.4.4",
  "title": "",
  "body": " If is a root of the polynomial , then for some polynomial .   The Division Algorithm tells us that . In the notation of the Division Algorithm, and . Therefore , which means that is a constant .  Now we know that , which says that . Therefore, we have .   "
},
{
  "id": "thm-fta",
  "level": "2",
  "url": "sec-polys.html#thm-fta",
  "type": "Theorem",
  "number": "1.4.5",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra   If is a degree polynomial having complex coefficients, then there are roots, , possibly with repitition. This means that .   "
},
{
  "id": "sec-polys-3-16",
  "level": "2",
  "url": "sec-polys.html#sec-polys-3-16",
  "type": "Proposition",
  "number": "1.4.6",
  "title": "",
  "body": "  If is a polynomial with real coefficients, there are real roots such that .   "
},
{
  "id": "sec-polys-4-3",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-3",
  "type": "Definition",
  "number": "1.4.7",
  "title": "",
  "body": "  If is a vector subspace of and an operator, we say that is invariant under if for all .   "
},
{
  "id": "sec-polys-4-5",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-5",
  "type": "Proposition",
  "number": "1.4.8",
  "title": "",
  "body": "  If is a polynomial and an operator, then both and are invariant subspaces under .    Suppose that is in , which means that . We need to explain why is also in , which leads us to .  Similarly, if is in , then there is a vector so that . Then , which shows that is also in . Therefore, is an invariant subspace of .   "
},
{
  "id": "sec-polys-4-7",
  "level": "2",
  "url": "sec-polys.html#sec-polys-4-7",
  "type": "Definition",
  "number": "1.4.9",
  "title": "",
  "body": " A monic polynomial is a polynomial where the coefficient of the highest degree term is .  "
},
{
  "id": "thm-minimal-polynomial",
  "level": "2",
  "url": "sec-polys.html#thm-minimal-polynomial",
  "type": "Theorem",
  "number": "1.4.10",
  "title": "The minimal polynomial of an operator.",
  "body": " The minimal polynomial of an operator   Suppose that is a finite-dimensional vector space over either or and that is an operator on . There is a unique monic polynomial of smallest degree such that . Moreover, . We call this polynomial the minimal polynomial of .    Our proof proceeds by induction on the dimension of . To begin, suppose that , which means that for some vector . Then for some , which is possibly . Then , which means that since spans . Therefore, if , we have .  We now imagine that and that the theorem has been verified for all operators on vector spaces of dimension less than . We choose a vector and consider the powers ; that is, consider the vectors . Since there are vector in this set and , we know this is a linearly dependent set.  Choose to be the smallest integer such that is a linear combination of . This means two things. First, the vectors are linearly independent. Second, there are constants . If we define the degree monic polynomial , then . That is, is in .  Since is invariant under and is in , we know that are all in . These vectors are linearly independent so we know that . Therefore, .  For convenience, we will denote the vector space . Since is invariant under , is an operator on , whose dimension is less than . By the induction hypothesis, we know that there is a unique monic polynomial such that . Again by the induction hypothesis, it also follows that .  Now consider the polynomial whose degree is . Moreover, both and are monic so is also monic. Finally, for any vector in , we have where the last equality holds because is in and for any vector in . Since for every vector , this means that .  This shows that there is a monic polynomial such that on . Therefore, there is some possibly different polynomial having the smallest degree among all such polynomials, and this is the minimal polynomial of the operator on .  To see that this polynomial is unique, suppose there are two monic polynomials and having smallest degree and and . If we consider , we see that since the highest degree terms of and have coefficients and therefore cancel. Also, . However, this is impossible since and had the smallest possible degree among all polynomials that vanish when evaluated on . This means that , which guarantees the uniqueness of the minimal polynomial.   "
},
{
  "id": "example-min-poly-1",
  "level": "2",
  "url": "sec-polys.html#example-min-poly-1",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  Consider the matrix and the linear operator that it defines. Notice that so if , then . The minimal polynomial of is therefore .  More generally, suppose that the minimal polynomial of an operator has degree . Since the minimal polynomial is monic, this means that . Because , we see that , a multiple of the identity.   "
},
{
  "id": "example-min-poly-2",
  "level": "2",
  "url": "sec-polys.html#example-min-poly-2",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "  By contrast, consider the matrix and the linear operator that it defines with respect to some basis. The degree of the minimal polynomial must be at least 2 since is not a multiple of the identity matrix. Notice, however, that and . This says that and so the minimal polynomial of is .   "
},
{
  "id": "prop-min-poly-roots",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-roots",
  "type": "Proposition",
  "number": "1.4.13",
  "title": "",
  "body": "  The set of roots of the minimal polynomial of equals the set of eigenvalues of .    Suppose that is the minimal polynomial of . We need to explain two things: that any eigenvalue of is a root of and that any root of is an eigenvalue of .  Suppose that is an eigenvalue of . This means that there is a nonzero vector such that and therefore for every . This means that , which implies that . Therefore, is a root of , the minimal polynomial of .  Conversely, suppose that is a root of . By , this means that . This says that However, since , there is some vector for which . Therefore, , which shows that is an eigenvector with associated eigenvalue .   "
},
{
  "id": "prop-min-poly-div",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-div",
  "type": "Proposition",
  "number": "1.4.14",
  "title": "",
  "body": "  If is a polynomial for which , then is a multiple of the minimal polynomial of .    If is the minimal polynomial of , then we can apply the Division Algorithm to write where . Furthermore, , which implies that . Since has the smallest degree among all polynomials that vanish when evaluated on and has a smaller degree than , we know that . Therefore, .   "
},
{
  "id": "prop-min-poly-subspace",
  "level": "2",
  "url": "sec-polys.html#prop-min-poly-subspace",
  "type": "Proposition",
  "number": "1.4.15",
  "title": "",
  "body": "  If is an operator on the vector space and is a subspace of that is invariant under , then the minimal polynomial of is a multiple of the minimal polynomial of .    Suppose that is the minimal polynomial of and is the minimal polynomial of on . This means that for every vector in and so . We also know that is the minimal polynomial of so by , we know that is a multiple of .   "
},
{
  "id": "sec-upper",
  "level": "1",
  "url": "sec-upper.html",
  "type": "Section",
  "number": "2.1",
  "title": "Upper triangular matrices",
  "body": " Upper triangular matrices   In this section, we will use our understanding of the minimal polynomial to find some standard forms for matrices of operators. First, we will consider upper triangular matrices.    Upper triangular matrices  As we have seen in the past, upper triangular matrices have some simple properties. For one, the eigenvalues of the associated operator equal the diagonal elements of the matrix. We have also seen that linear systems formed by triangular matrices are relatively easy to solve. All told, they form a pleasant set of matrices.  Reember that an upper triangular matrix is one whose entries are zero below the diagonal; that is, they have a form like this: . Suppose that is an operator and that there is a basis for which the associated matrix for is upper triangular. Since if , we have and so forth.  Notice that says that so that is an eigenvector with associated eigenvalue .  In addition, tells us that , which implies that is invariant under .  More generally, , which says that, for every , is invariant under .  Let's record this as a proposition.    Suppose that is an operator on the vector space . Then there is a basis for in which the associated matrix of is upper triangular if and only if is invariant under for each .    The discussion above explains why an operator with an upper triangular matrix forms invariant subspaces. Conversely, suppose that is invariant for every . The matrix associated to satisfies , which shows that if and that is therefore upper triangular.    We can rephrase this in terms of polynomials.    Suppose that is an operator on and that there is a basis of such that the matrix of is upper triangular. Then .    We will use to denote the polynomial .  First consider . Since is upper triangular, we know that , which means that . Therefore, .  Next consider for . Rearranging gives . Therefore, , which tells us that .  Continuing in this way, we see that and hence that . This means that for every vector and so we know that as claimed.    This leads to the following crucial result.    Suppose that is an operator on over the field . There is a basis for for which the matrix of is upper triangular if and only if the minimal polynomial of has the form where the roots are in .  Moreover, when this happens, the diagonal entries of the matrix are the eigenvalues of .    One direction is a natural consequence of . Suppose that there is a basis for which the matrix of is upper triangular. That proposition tells us that for . Since , we know that is a multiple of the minimal polynomial of , which says that the minimal polynomial has the form given in the statement of this theorem. Because the eigenvalues are the roots of the minimal polynomial, we also know that the diagonal entries of the matrix are the eigenvalues.  Now suppose that the minimal polynomial has the form given. We will prove by induction that there is a basis for which the matrix of is upper triangular.  First suppose that so that . This means that so that the matrix of in any basis is diagonal and hence upper triangular. Notice that the diagonal entries of this matrix are , which is an eigenvalue of .  Let's now suppose that the result is true for any operator and vector space for which the minimal polynomial has the form where . Consider the subspace , which we know is invariant under . Since any vector in has the form , we know that . Therefore, if , then . As a result, is a multiple of the minimal polynomial of and so the minimal polynomial of is a product of fewer than terms having the form . By the induction hypothesis, we know there is a basis for so that the basis of is upper triangular.  We will now extend the basis of by vectors . Since is in , we have or , which shows that the matrix of is upper triangular. Furthermore, the diagonal entry of the matrix associated to is , which shows that the diagonal entries of the matrix are the eigenvalues of .    Notice that the tells us that any polynomial with complex coefficients has the form given in . As a result, any operator on a complex vector space has a basis for which the associated matrix is upper triangular.   "
},
{
  "id": "prop-upper-invariant",
  "level": "2",
  "url": "sec-upper.html#prop-upper-invariant",
  "type": "Proposition",
  "number": "2.1.1",
  "title": "",
  "body": "  Suppose that is an operator on the vector space . Then there is a basis for in which the associated matrix of is upper triangular if and only if is invariant under for each .    The discussion above explains why an operator with an upper triangular matrix forms invariant subspaces. Conversely, suppose that is invariant for every . The matrix associated to satisfies , which shows that if and that is therefore upper triangular.   "
},
{
  "id": "prop-upper-min",
  "level": "2",
  "url": "sec-upper.html#prop-upper-min",
  "type": "Proposition",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose that is an operator on and that there is a basis of such that the matrix of is upper triangular. Then .    We will use to denote the polynomial .  First consider . Since is upper triangular, we know that , which means that . Therefore, .  Next consider for . Rearranging gives . Therefore, , which tells us that .  Continuing in this way, we see that and hence that . This means that for every vector and so we know that as claimed.   "
},
{
  "id": "thm-upper-minimal",
  "level": "2",
  "url": "sec-upper.html#thm-upper-minimal",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "",
  "body": "  Suppose that is an operator on over the field . There is a basis for for which the matrix of is upper triangular if and only if the minimal polynomial of has the form where the roots are in .  Moreover, when this happens, the diagonal entries of the matrix are the eigenvalues of .    One direction is a natural consequence of . Suppose that there is a basis for which the matrix of is upper triangular. That proposition tells us that for . Since , we know that is a multiple of the minimal polynomial of , which says that the minimal polynomial has the form given in the statement of this theorem. Because the eigenvalues are the roots of the minimal polynomial, we also know that the diagonal entries of the matrix are the eigenvalues.  Now suppose that the minimal polynomial has the form given. We will prove by induction that there is a basis for which the matrix of is upper triangular.  First suppose that so that . This means that so that the matrix of in any basis is diagonal and hence upper triangular. Notice that the diagonal entries of this matrix are , which is an eigenvalue of .  Let's now suppose that the result is true for any operator and vector space for which the minimal polynomial has the form where . Consider the subspace , which we know is invariant under . Since any vector in has the form , we know that . Therefore, if , then . As a result, is a multiple of the minimal polynomial of and so the minimal polynomial of is a product of fewer than terms having the form . By the induction hypothesis, we know there is a basis for so that the basis of is upper triangular.  We will now extend the basis of by vectors . Since is in , we have or , which shows that the matrix of is upper triangular. Furthermore, the diagonal entry of the matrix associated to is , which shows that the diagonal entries of the matrix are the eigenvalues of .   "
},
{
  "id": "sec-spectral",
  "level": "1",
  "url": "sec-spectral.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Spectral Theorem",
  "body": " The Spectral Theorem   In , we saw conditions that enable us to represent a linear transformation as an upper triangular matrix. This is our first theorem about a standard form, and it puts us in a position to prove an important result that we used earlier called the Spectral Theorem.   The version of the Spectral Theorem that we saw concerns real symmetric matrices, which are square matrices for which . This necessarily means that we are working in an inner product space so we will first extend our results on upper triangular matrices to operators on inner product spaces.    The Schur decomposition  We will first consider complex vector spaces. In particular, suppose that is a finite-dimensional complex inner product space and that is an operator on . By the Fundamental Theorem of Algebra, we know that the minimal polynomial of can be written as a product of linear factors: , which tells us that there is a basis in which is upper triangular. We will denote the vectors in as .  Since is an inner product space, we can apply the Gram-Schmidt algorithm to to form a new orthogonal basis . The vectors in will be denoted by so that and so forth. We can rearrange these expressions so that . In other words, the change of coordinates matirx is upper triangular, which implies that is upper triangular.  We obtain an orthonormal basis by setting . Since this change of coordinates matrix is diagonal, we obtain the following result.   Schur decomposition   If is an operator on a finite dimensional complex inner product space, then there is an orthonormal basis in which the matrix representing is upper triangular.    This result is sometimes expressed in terms of matrices. We earlier considered orthogonal matrices, which are real matrices whose columns form an orthonormal basis. If the matrix is complex, such a matrix is called unitary .   A complex matrix whose columns form an orthonormal basis for is called unitary . Such a matrix satisfies .   We can now restate the Schur decomposition in terms of unitary matrices.   Schur decomposition   If is a square complex matrix, then there is a unitary matrix and an upper triangular matrix such that .      Self-adjoint operators  When and are inner product spaces, a linear transformation has an adjoint as introduced in . When expressed in terms of orthonormal bases for and , the matrix associated to is the conjugate transpose of the matrix associated to . Or when the vector spaces are real, the matrices are simply the transpose of one another.  We will now consider operators on an inner product space that are self-adjoint .    We say that operator on an inner product space is self-adjoint if .     The complex spectral theorem   If is a self-adjoint operator on a complex vector space , then there is an orthonormal basis for which is diagonal. Furthermore, the eigenvalues of are real.    By the Schur decomposition , we know that there is an orthonormal basis for which is upper triangular. However, since , we also know that , which says that is diagonal with real entries on the diagonal.    For real inner product spaces, self-adjoint operators are represented by symmetric matrices.    If is a self-adjoint operator on an inner product space and and are real numbers for which , then the operator is an isomorphism.    By the Fundamental Theorem of Linear Maps , we only need to show that . Therefore, we suppose that is a nonzero vector and consider . This shows that is also nonzero so the operator is an isomorphism.    If and is an operator on , we know from the that the minimal polynomial of has the form where each . If and is a self-adjoint operator on , we can reach a similar conclusion.    If is a real inner product space and is a self-adjoint operator on , then the minimal polynomial of has the form where .    We know that the minimal polynomial has the form where for each . However, since , we know that . If , then is invertible by . If we multiply by its inverse, we obtain another polynomial of smaller degree for which .  Since the minimal polynomial is the polynomial having the smallest degree among all polynomials for which , we conclude that and therefore .     The Spectral Theorem   If is a self-adjoint operator on a real vector space , then there is an orthonormal basis such that the matrix associated to is diagonal.    By and , we know that there is a basis of for which the matrix associated to is upper triangular. As before, we apply the Gram-Schmidt algorithm to obtain an orthonormal basis and note that the change of coordinates matrix is upper triangular. Therefore, is also upper triangular.  However, if is this matrix, we know that since is self-adjoint. Therefore, is diagonal.    In terms of matrices, this has the more familiar form:   The spectral theorem, matrix edition   If is a real, symmetric matrix, then there is an orthogonal matrix and a diagonal matrix such that .     "
},
{
  "id": "thm-schur",
  "level": "2",
  "url": "sec-spectral.html#thm-schur",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "Schur decomposition.",
  "body": " Schur decomposition   If is an operator on a finite dimensional complex inner product space, then there is an orthonormal basis in which the matrix representing is upper triangular.   "
},
{
  "id": "sec-spectral-3-7",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-3-7",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": " A complex matrix whose columns form an orthonormal basis for is called unitary . Such a matrix satisfies .  "
},
{
  "id": "sec-spectral-3-9",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-3-9",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "Schur decomposition.",
  "body": " Schur decomposition   If is a square complex matrix, then there is a unitary matrix and an upper triangular matrix such that .   "
},
{
  "id": "sec-spectral-4-4",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-4-4",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  We say that operator on an inner product space is self-adjoint if .   "
},
{
  "id": "sec-spectral-4-5",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-4-5",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "The complex spectral theorem.",
  "body": " The complex spectral theorem   If is a self-adjoint operator on a complex vector space , then there is an orthonormal basis for which is diagonal. Furthermore, the eigenvalues of are real.    By the Schur decomposition , we know that there is an orthonormal basis for which is upper triangular. However, since , we also know that , which says that is diagonal with real entries on the diagonal.   "
},
{
  "id": "lemma-self-ad-quadratic",
  "level": "2",
  "url": "sec-spectral.html#lemma-self-ad-quadratic",
  "type": "Lemma",
  "number": "2.2.6",
  "title": "",
  "body": "  If is a self-adjoint operator on an inner product space and and are real numbers for which , then the operator is an isomorphism.    By the Fundamental Theorem of Linear Maps , we only need to show that . Therefore, we suppose that is a nonzero vector and consider . This shows that is also nonzero so the operator is an isomorphism.   "
},
{
  "id": "prop-self-ad-min-poly",
  "level": "2",
  "url": "sec-spectral.html#prop-self-ad-min-poly",
  "type": "Proposition",
  "number": "2.2.7",
  "title": "",
  "body": "  If is a real inner product space and is a self-adjoint operator on , then the minimal polynomial of has the form where .    We know that the minimal polynomial has the form where for each . However, since , we know that . If , then is invertible by . If we multiply by its inverse, we obtain another polynomial of smaller degree for which .  Since the minimal polynomial is the polynomial having the smallest degree among all polynomials for which , we conclude that and therefore .   "
},
{
  "id": "thm-spectral-thm",
  "level": "2",
  "url": "sec-spectral.html#thm-spectral-thm",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "The Spectral Theorem.",
  "body": " The Spectral Theorem   If is a self-adjoint operator on a real vector space , then there is an orthonormal basis such that the matrix associated to is diagonal.    By and , we know that there is a basis of for which the matrix associated to is upper triangular. As before, we apply the Gram-Schmidt algorithm to obtain an orthonormal basis and note that the change of coordinates matrix is upper triangular. Therefore, is also upper triangular.  However, if is this matrix, we know that since is self-adjoint. Therefore, is diagonal.   "
},
{
  "id": "sec-spectral-4-12",
  "level": "2",
  "url": "sec-spectral.html#sec-spectral-4-12",
  "type": "Theorem",
  "number": "2.2.9",
  "title": "The spectral theorem, matrix edition.",
  "body": " The spectral theorem, matrix edition   If is a real, symmetric matrix, then there is an orthogonal matrix and a diagonal matrix such that .   "
},
{
  "id": "sec-nilpotent",
  "level": "1",
  "url": "sec-nilpotent.html",
  "type": "Section",
  "number": "2.3",
  "title": "Nilpotent operators",
  "body": " Nilpotent operators   Eigenvectors of an operator are found through the equation . Now that we have developed some conditions under which operators are diagonalizable, we would like to understand what happens when operators are not diagonalizable. To this end, we will generalize the eigenvector condition by considering . To get started, however, we will first consider a related class of operators.    Null spaces of powers  Suppose that is an operator. If , then it also happens that . This means that , and we therefore have .  The next propositions say that this process stabilizes so that the inclusions eventually become equalities. First we show that when we reach an equality, then all the following inclusions are equalities as well.   If , then for any .   Suppose that for some and that is a vector in . It follows that , which means that is in . Because , it follows that is in , which says that .  We then see that .    The next result says that this process will always stablize by the time we reach the dimension of .    For any operator on a vector space of dimension , .    If , then is invertible as is every power of . Therefore for every power, including and .  Now suppose that has positive dimension so that and that the null spaces continue to grow . In this case, . This shows that the null spaces cannot grow beyond so we have .      Nilpotent operators  We will now focus on a particular type of operator known as nilpotent.   Nilpotent operator  An operator is nilpotent if some power .   Notice that the operator is nilpotent but we will often consider nonzero nilpotent operators.   Consider the matrix and notice that . An operator whose associated matrix is with respect to some basis is nilpotent since .   Suppose is nilpotent and that is the smallest power for which . This means that if and hence is the minimal polynomial of . We could view , which says that there is a basis for which the matrix associated to is upper triangular .  In fact, we will see that there is a basis so that the matrix associated to a nilpotent operator has an especially nice form.    A nilpotent block matrix is a square matrix having the form . This is, all the entries are zero except for the entries directly above the diagonal, which are 1.     The following matrix consists of three nilpotent blocks on the diagonal, a block, a block, and a block. .  Let's look a little more closely at how the linear transformation acts on basis vectors, which we'll denote as . We have . This transformation satisfies , but so we have null spaces . Within these null spaces, we have bases . For each , we have .  Notice that the block is formed by a vector that is in but not . Once we have identified , we obtain new basis vectors as and .   In fact, every nilpotent operator has a basis whose associated matrix consists of a set of nilpotent blocks on the diagonal, which we will state and prove in the next proposition.  First, notice that if is nilpotent, then its minimal polynomial is for some . In particular, this means that but . As we saw in , we have the inclusion of null spaces: where the inclusion of each null space into the other is a proper inclusion.  If is in , then , which means that is in . In other words, applying pushes a vector to the left in the inclusions of null spaces in .  We are now ready to prove our structure theorem for nilpotent operators.    If is a nilpotent operator on , then there is a basis for such that the matrix associated to has the form where each is a nilpotent block.    Our proof proceeds by induction on the dimension of the vector space , which we will denote by .  To verify the base case, suppose that . As we have seen, if is a vector in , then for some scalar . However, if is nilpotent, then and so . In any basis, the matrix representing is , a nilpotent block.  Now suppose that the result is true for any nilpotent operator on a vector space of dimension less than . Suppose also that the minimal polynomial of is . This means that but so . We will choose a vector in that is not in and define . Notice that so that is in . More generally, is in .  We will use to denote the subspace spanned by . Notice that a vector in may be written as and therefore . This shows that is a -invariant subspace of .  Suppose now that is a linear functional so that . We then define by . Once again, if is a vector in , then so that . This shows three things.   is surjective.   , the standard basis vector in , which means that is a linearly independent set and therefore a basis for . Moreover, in this basis, the matrix representing is a nilpotent block.   implies that , which means that .    Now consider . Since is surjective, we have by the Fundamental Theorem of Linear Maps . Moreover, so we have .  Finally, we claim that is a -invariant subspace. Notice that is in if and only if for all . If this is the case, then for all , which shows that is -invariant.  Because and is nilpotent, the inductive hypothesis applies to show that there is a basis for so that the matrix representing consists of nilpotent blocks. We can combine this basis with to finish the proof of the theorem.      "
},
{
  "id": "prop-nil-nul-incl",
  "level": "2",
  "url": "sec-nilpotent.html#prop-nil-nul-incl",
  "type": "Proposition",
  "number": "2.3.1",
  "title": "",
  "body": " If , then for any .   Suppose that for some and that is a vector in . It follows that , which means that is in . Because , it follows that is in , which says that .  We then see that .   "
},
{
  "id": "subsec-nul-powers-6",
  "level": "2",
  "url": "sec-nilpotent.html#subsec-nul-powers-6",
  "type": "Proposition",
  "number": "2.3.2",
  "title": "",
  "body": "  For any operator on a vector space of dimension , .    If , then is invertible as is every power of . Therefore for every power, including and .  Now suppose that has positive dimension so that and that the null spaces continue to grow . In this case, . This shows that the null spaces cannot grow beyond so we have .   "
},
{
  "id": "sec-nilpotent-4-3",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-3",
  "type": "Definition",
  "number": "2.3.3",
  "title": "Nilpotent operator.",
  "body": " Nilpotent operator  An operator is nilpotent if some power .  "
},
{
  "id": "sec-nilpotent-4-5",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-5",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": " Consider the matrix and notice that . An operator whose associated matrix is with respect to some basis is nilpotent since .  "
},
{
  "id": "sec-nilpotent-4-8",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-8",
  "type": "Definition",
  "number": "2.3.5",
  "title": "",
  "body": "  A nilpotent block matrix is a square matrix having the form . This is, all the entries are zero except for the entries directly above the diagonal, which are 1.   "
},
{
  "id": "example-nilpotent",
  "level": "2",
  "url": "sec-nilpotent.html#example-nilpotent",
  "type": "Example",
  "number": "2.3.6",
  "title": "",
  "body": " The following matrix consists of three nilpotent blocks on the diagonal, a block, a block, and a block. .  Let's look a little more closely at how the linear transformation acts on basis vectors, which we'll denote as . We have . This transformation satisfies , but so we have null spaces . Within these null spaces, we have bases . For each , we have .  Notice that the block is formed by a vector that is in but not . Once we have identified , we obtain new basis vectors as and .  "
},
{
  "id": "sec-nilpotent-4-14",
  "level": "2",
  "url": "sec-nilpotent.html#sec-nilpotent-4-14",
  "type": "Proposition",
  "number": "2.3.7",
  "title": "",
  "body": "  If is a nilpotent operator on , then there is a basis for such that the matrix associated to has the form where each is a nilpotent block.    Our proof proceeds by induction on the dimension of the vector space , which we will denote by .  To verify the base case, suppose that . As we have seen, if is a vector in , then for some scalar . However, if is nilpotent, then and so . In any basis, the matrix representing is , a nilpotent block.  Now suppose that the result is true for any nilpotent operator on a vector space of dimension less than . Suppose also that the minimal polynomial of is . This means that but so . We will choose a vector in that is not in and define . Notice that so that is in . More generally, is in .  We will use to denote the subspace spanned by . Notice that a vector in may be written as and therefore . This shows that is a -invariant subspace of .  Suppose now that is a linear functional so that . We then define by . Once again, if is a vector in , then so that . This shows three things.   is surjective.   , the standard basis vector in , which means that is a linearly independent set and therefore a basis for . Moreover, in this basis, the matrix representing is a nilpotent block.   implies that , which means that .    Now consider . Since is surjective, we have by the Fundamental Theorem of Linear Maps . Moreover, so we have .  Finally, we claim that is a -invariant subspace. Notice that is in if and only if for all . If this is the case, then for all , which shows that is -invariant.  Because and is nilpotent, the inductive hypothesis applies to show that there is a basis for so that the matrix representing consists of nilpotent blocks. We can combine this basis with to finish the proof of the theorem.   "
},
{
  "id": "sec-jordan",
  "level": "1",
  "url": "sec-jordan.html",
  "type": "Section",
  "number": "2.4",
  "title": "Generalized eigenvectors",
  "body": " Generalized eigenvectors   Up to this point, eigenvalues and eigenvectors have helped us find some standard forms of operators. In particular, we have seen that if an operator on , an -dimensional vector space has linearly independent eigenvectors, then is diagonalizable. We also know that this condition holds if has distinct eigenvalues or if the operator is self-adjoint.  However, there are examples where this does not apply. For instance, the matrix has a single eigenvalue and the associated eigenspace is one-dimensional. In this case, the characteristic polynomial is so the eigenvalue is a root with multiplicity two.  This example show that just looking at eigenvalues and eigenvectors will not be enough to always find a standard form. So instead, we do something that mathematicians love to do: generalize an idea that has already proven useful. In this case, the eigenvalue\/eigenvector condition is given by the equation . We will generalize this equation to for some and call the solutions generalized eigenvectors .    Generalized eigenvectors    If is an operator on , we say that a nonzero vector is a generalized eigenvector if for some . The set of such vectors, the generalized eigenspace is denoted .    Notice that eigenvectors are also generalized eigenvectors since an eigenvector satisfies , the generalized eigenvector condition with .  We would like to characterize a generalized eigenspace as a subspace of . Before doing so, however, we recall an earlier homework exercise.    If is an operator and a nonzero vector in , then there is a unique monic polynomial having the smallest possible degree and satisfying .  If is another polynomial for which , then divides . In particular, it follows that divides the minimal polynomial of .    With this in mind, we can characterize the generalized eigenspaces.    If the minimal polynomial of has the form where , then .    Suppose that is a generalized eigenvector, which means that for some . If , then , which means that divides . Therefore, for some .  The minimal polynomiall of has exactly factors of . Since divides , can have no more than factors of . Therefore, , which says that is in .    We know that a vector cannot be an eigenvector associated to two different eigenvalues. This is also true for generalized eigenvectors.    If and are distinct eigenvalues of , then .    Suppose that is a nonzero vector in . Then for some , which says that is a root of .  At the same time, if is in , then for some . Since , we must have .       Complex Vector Spaces  Because of the Fundamental Theorem of Algebra, operators on complex vector spaces have special properties. In particular, the minimal polynomial of an operator on a complex vector space has the form . In this case, we claim that is a direct sum of generalized eigenspaces.    If is an operator on a complex vector space with eigenvalues , then .    We will use induction on the dimension of . To establish the base case, we assume that . In this case, so or . Then .  For the inductive step, we will assume the result is true for all vector spaces of dimension less than . We will choose an eigenvalue and write the minimal polynomial as where .  Notice that . To see this, suppose that is in this intersection. Then for some vector . Moreover, . This implies that divides so that the only factors of are . Since also divides the minimal polynomial , we also know that divides . Therefore, .  Because of , we also know that , which says that . If we define , then we also have .  Since we have written the minimal polynomial , we can see that the minimal polynomial of is . For instance, if is in , then for some vector . Then . This shows that the minimal polynomial of divides . However, if the minimal polynomial of has a smaller degree than , this would contradcit the fact that the minimal polynomial of has the smallest possible degree.  By the inductive hypothesis, may be written as a direct sum of its generalized eigenspaces. All that remains is to show that, if is an eigenvalue distinct from , the generalized eigenspace of associated to is the same as the generalized eigenspace of associated to . To this end, suppose that satisfies for some . Because , we can write where and . We have . Because these subspaces are -invariant, we have . This means that by so that . Therefore, and .       Jordan form  We are now ready to proof the main structure theorem, again assuming that is a complex vector space. By a Jordan block, we mean a matrix whose diagonal entries are all , whose entries directly above the diagonal are 1, and whose other entries are all zero. That is, .   Jordan canonical form   If is an operator on a complex vector space , then there is a basis for such that the matrix associated to consists only of Jordan blocks on the diagonal. That is, .    We know that . Moreover, on , the operator is nilpotent, which means there is a basis for such that the matrix associated to conists of nilpotent blocks. The matrix associated to therefore has consists of Jordan blocks. Because each generalized eigenspace is invariant under , the theorem holds.    Notice that the characteristic polynomial of , which can easily be found using this matrix, has the form where the multiplicity of each eigenvalue equals the dimension . We earlier called the algebraic multiplicity of the eigenvalue . Because the eigenspace , have therefore shown that the multiplicity of the eigenvalue is at least as large as the dimension of the eigenspace: .   "
},
{
  "id": "sec-jordan-3-2",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-3-2",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  If is an operator on , we say that a nonzero vector is a generalized eigenvector if for some . The set of such vectors, the generalized eigenspace is denoted .   "
},
{
  "id": "sec-jordan-3-5",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-3-5",
  "type": "Proposition",
  "number": "2.4.2",
  "title": "",
  "body": "  If is an operator and a nonzero vector in , then there is a unique monic polynomial having the smallest possible degree and satisfying .  If is another polynomial for which , then divides . In particular, it follows that divides the minimal polynomial of .   "
},
{
  "id": "sec-jordan-3-7",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-3-7",
  "type": "Proposition",
  "number": "2.4.3",
  "title": "",
  "body": "  If the minimal polynomial of has the form where , then .    Suppose that is a generalized eigenvector, which means that for some . If , then , which means that divides . Therefore, for some .  The minimal polynomiall of has exactly factors of . Since divides , can have no more than factors of . Therefore, , which says that is in .   "
},
{
  "id": "prop-gen-eig-disjoint",
  "level": "2",
  "url": "sec-jordan.html#prop-gen-eig-disjoint",
  "type": "Proposition",
  "number": "2.4.4",
  "title": "",
  "body": "  If and are distinct eigenvalues of , then .    Suppose that is a nonzero vector in . Then for some , which says that is a root of .  At the same time, if is in , then for some . Since , we must have .   "
},
{
  "id": "sec-jordan-4-3",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-4-3",
  "type": "Proposition",
  "number": "2.4.5",
  "title": "",
  "body": "  If is an operator on a complex vector space with eigenvalues , then .    We will use induction on the dimension of . To establish the base case, we assume that . In this case, so or . Then .  For the inductive step, we will assume the result is true for all vector spaces of dimension less than . We will choose an eigenvalue and write the minimal polynomial as where .  Notice that . To see this, suppose that is in this intersection. Then for some vector . Moreover, . This implies that divides so that the only factors of are . Since also divides the minimal polynomial , we also know that divides . Therefore, .  Because of , we also know that , which says that . If we define , then we also have .  Since we have written the minimal polynomial , we can see that the minimal polynomial of is . For instance, if is in , then for some vector . Then . This shows that the minimal polynomial of divides . However, if the minimal polynomial of has a smaller degree than , this would contradcit the fact that the minimal polynomial of has the smallest possible degree.  By the inductive hypothesis, may be written as a direct sum of its generalized eigenspaces. All that remains is to show that, if is an eigenvalue distinct from , the generalized eigenspace of associated to is the same as the generalized eigenspace of associated to . To this end, suppose that satisfies for some . Because , we can write where and . We have . Because these subspaces are -invariant, we have . This means that by so that . Therefore, and .   "
},
{
  "id": "sec-jordan-5-3",
  "level": "2",
  "url": "sec-jordan.html#sec-jordan-5-3",
  "type": "Theorem",
  "number": "2.4.6",
  "title": "Jordan canonical form.",
  "body": " Jordan canonical form   If is an operator on a complex vector space , then there is a basis for such that the matrix associated to consists only of Jordan blocks on the diagonal. That is, .    We know that . Moreover, on , the operator is nilpotent, which means there is a basis for such that the matrix associated to conists of nilpotent blocks. The matrix associated to therefore has consists of Jordan blocks. Because each generalized eigenspace is invariant under , the theorem holds.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
