export interface Question {
  name: string;
  difficulty?: "E" | "M" | "H";
}

// All 247 TUF questions distributed in the EXACT order from the curriculum,
// sequentially across 90 days (~3 per day). Days 83-89 are revision/mock mode.

const DAY_QUESTIONS: Record<number, Question[]> = {

  // ── Doubly Linked List ── (Days 0–10, 33 questions)

  0: [
    { name: "Introduction to Doubly LL" },
    { name: "Deletion in Doubly LL",              difficulty: "E" },
    { name: "Insertion in DLL",                   difficulty: "E" },
  ],
  1: [
    { name: "Convert Array to Doubly Linked List",difficulty: "E" },
    { name: "Delete head of Doubly Linked List",  difficulty: "E" },
    { name: "Delete Tail of Doubly Linked List",  difficulty: "E" },
  ],
  2: [
    { name: "Delete Kth Element of Doubly Linked List",           difficulty: "E" },
    { name: "Removing given node in Doubly Linked List",          difficulty: "E" },
    { name: "Insert node before head in Doubly Linked List",      difficulty: "E" },
  ],
  3: [
    { name: "Insert node before tail in Doubly Linked List",      difficulty: "E" },
    { name: "Insert node before (kth node) in Doubly Linked List",difficulty: "E" },
    { name: "Insert before given node in Doubly Linked List",     difficulty: "E" },
  ],
  4: [
    { name: "Add two numbers in Linked List",                   difficulty: "M" },
    { name: "Segregate odd and even nodes in Linked List",      difficulty: "M" },
    { name: "Sort a Linked List of 0's 1's and 2's",            difficulty: "M" },
  ],
  5: [
    { name: "Remove Nth node from the back of the LL",          difficulty: "M" },
    { name: "Reverse a LL",                                     difficulty: "E" },
    { name: "Add one to a number represented by LL",            difficulty: "M" },
  ],
  6: [
    { name: "Find Middle of Linked List",         difficulty: "E" },
    { name: "Delete the middle node in LL",       difficulty: "M" },
    { name: "Check if LL is palindrome or not",   difficulty: "M" },
  ],
  7: [
    { name: "Find the intersection point of Y LL",difficulty: "M" },
    { name: "Detect a loop in LL",                difficulty: "M" },
    { name: "Find the starting point in LL",      difficulty: "M" },
  ],
  8: [
    { name: "Length of loop in LL",                             difficulty: "M" },
    { name: "Reverse LL in group of given size K",              difficulty: "H" },
    { name: "Rotate a LL",                                      difficulty: "M" },
  ],
  9: [
    { name: "Merge two Sorted Lists",                           difficulty: "M" },
    { name: "Flattening of LL",                                 difficulty: "H" },
    { name: "Sort LL",                                          difficulty: "M" },
  ],
  10: [
    { name: "Clone a LL with random and next pointer",          difficulty: "H" },
    { name: "Delete all occurrences of a key in DLL",           difficulty: "M" },
    { name: "Remove duplicates from sorted DLL",                difficulty: "E" },
  ],

  // ── Bit Manipulation ── (Days 11–12, 8 questions)

  11: [
    { name: "Introduction to Bits and Tricks" },
    { name: "Minimum Bit Flips to Convert Number",              difficulty: "E" },
    { name: "Single Number - I",                                difficulty: "E" },
    { name: "Single Number - II",                               difficulty: "M" },
  ],
  12: [
    { name: "Single Number - III",                                              difficulty: "M" },
    { name: "Divide two numbers without multiplication and division",            difficulty: "M" },
    { name: "Power Set Bit Manipulation",                                        difficulty: "M" },
    { name: "XOR of numbers in a given range",                                   difficulty: "M" },
  ],

  // ── Greedy Algorithms ── (Days 13–16, 11 questions)

  13: [
    { name: "Assign Cookies",                                   difficulty: "E" },
    { name: "Lemonade Change",                                  difficulty: "E" },
    { name: "Jump Game - I",                                    difficulty: "M" },
  ],
  14: [
    { name: "Shortest Job First",                               difficulty: "M" },
    { name: "Job sequencing Problem",                           difficulty: "M" },
    { name: "N meetings in one room",                           difficulty: "M" },
  ],
  15: [
    { name: "Non-overlapping Intervals",                        difficulty: "M" },
    { name: "Insert Interval",                                  difficulty: "M" },
    { name: "Minimum number of platforms required for a railway",difficulty: "M" },
  ],
  16: [
    { name: "Valid Paranthesis Checker",                        difficulty: "H" },
    { name: "Candy",                                            difficulty: "H" },
  ],

  // ── Sliding Window / 2 Pointer ── (Days 17–19, 10 questions)

  17: [
    { name: "Maximum Points You Can Obtain from Cards",         difficulty: "M" },
    { name: "Longest Substring Without Repeating Characters",   difficulty: "M" },
    { name: "Max Consecutive Ones III",                         difficulty: "M" },
  ],
  18: [
    { name: "Fruit Into Baskets",                                       difficulty: "M" },
    { name: "Longest Substring With At Most K Distinct Characters",     difficulty: "M" },
    { name: "Longest Repeating Character Replacement",                  difficulty: "M" },
    { name: "Minimum Window Substring",                                 difficulty: "H" },
  ],
  19: [
    { name: "Number of Substrings Containing All Three Characters",     difficulty: "M" },
    { name: "Binary Subarrays With Sum",                                difficulty: "M" },
    { name: "Count number of Nice subarrays",                           difficulty: "M" },
  ],

  // ── Stack / Queues ── (Days 20–26, 22 questions)

  20: [
    { name: "Implement Stack using Arrays",                     difficulty: "E" },
    { name: "Implement Queue using Arrays",                     difficulty: "E" },
    { name: "Implement Stack using Queue",                      difficulty: "E" },
  ],
  21: [
    { name: "Implement Queue using Stack",                      difficulty: "E" },
    { name: "Implement stack using Linkedlist",                 difficulty: "E" },
    { name: "Implement queue using Linkedlist",                 difficulty: "E" },
    { name: "Balanced Paranthesis",                             difficulty: "E" },
  ],
  22: [
    { name: "Next Greater Element",                             difficulty: "M" },
    { name: "Next Greater Element - 2",                         difficulty: "M" },
    { name: "Asteroid Collision",                               difficulty: "M" },
  ],
  23: [
    { name: "Sum of Subarray Minimums",                         difficulty: "M" },
    { name: "Sum of Subarray Ranges",                           difficulty: "M" },
    { name: "Remove K Digits",                                  difficulty: "M" },
  ],
  24: [
    { name: "Implement Min Stack",                              difficulty: "M" },
    { name: "Sliding Window Maximum",                           difficulty: "H" },
    { name: "Trapping Rainwater",                               difficulty: "H" },
  ],
  25: [
    { name: "Largest rectangle in a histogram",                 difficulty: "H" },
    { name: "Maximum Rectangles",                               difficulty: "H" },
    { name: "Stock span problem",                               difficulty: "M" },
  ],
  26: [
    { name: "Celebrity Problem",                                difficulty: "M" },
    { name: "LRU Cache",                                        difficulty: "H" },
    { name: "LFU Cache",                                        difficulty: "H" },
  ],

  // ── Binary Trees ── (Days 27–37, 30 questions)

  27: [
    { name: "Introduction (Binary Trees)" },
    { name: "Inorder Traversal",                                difficulty: "E" },
    { name: "Preorder Traversal",                               difficulty: "E" },
  ],
  28: [
    { name: "Postorder Traversal",                              difficulty: "E" },
    { name: "Level Order Traversal",                            difficulty: "M" },
    { name: "Pre, Post, Inorder in one traversal",              difficulty: "M" },
  ],
  29: [
    { name: "Maximum Depth in BT",                              difficulty: "E" },
    { name: "Check if two trees are identical or not",          difficulty: "E" },
    { name: "Check for balanced binary tree",                   difficulty: "M" },
  ],
  30: [
    { name: "Diameter of Binary Tree",                          difficulty: "M" },
    { name: "Maximum path sum",                                 difficulty: "H" },
    { name: "Check for symmetrical BTs",                        difficulty: "E" },
  ],
  31: [
    { name: "Zig Zag or Spiral Traversal",                      difficulty: "M" },
    { name: "Boundary Traversal",                               difficulty: "M" },
    { name: "Vertical Order Traversal",                         difficulty: "H" },
  ],
  32: [
    { name: "Top View of BT",                                   difficulty: "M" },
    { name: "Bottom view of BT",                                difficulty: "M" },
    { name: "Right/Left View of BT",                            difficulty: "M" },
  ],
  33: [
    { name: "Print root to leaf path in BT",                    difficulty: "M" },
    { name: "LCA in BT",                                        difficulty: "M" },
    { name: "Maximum Width of BT",                              difficulty: "M" },
  ],
  34: [
    { name: "Print all nodes at a distance of K in BT",         difficulty: "M" },
    { name: "Minimum time taken to burn the BT from a given Node", difficulty: "H" },
    { name: "Count total nodes in a complete BT",               difficulty: "M" },
  ],
  35: [
    { name: "Requirements needed to construct a unique BT" },
    { name: "Construct a BT from Preorder and Inorder",         difficulty: "M" },
    { name: "Construct a BT from Postorder and Inorder",        difficulty: "M" },
  ],
  36: [
    { name: "Serialize and De-serialize BT",                    difficulty: "H" },
    { name: "Morris Inorder Traversal",                         difficulty: "M" },
    { name: "Morris Preorder Traversal",                        difficulty: "M" },
  ],

  // ── Binary Search Trees ── (Days 37–41, 14 questions)
  // Note: day 37 continues into BST

  37: [
    { name: "Introduction to BST" },
    { name: "Search in BST",                                    difficulty: "E" },
    { name: "Floor and Ceil in a BST",                          difficulty: "M" },
  ],
  38: [
    { name: "Insert a given node in BST",                       difficulty: "M" },
    { name: "Delete a node in BST",                             difficulty: "M" },
    { name: "Kth Smallest and Largest element in BST",          difficulty: "M" },
  ],
  39: [
    { name: "Check if a tree is a BST or not",                  difficulty: "M" },
    { name: "LCA in BST",                                       difficulty: "M" },
    { name: "Construct a BST from a preorder traversal",        difficulty: "M" },
  ],
  40: [
    { name: "Inorder successor and predecessor in BST",         difficulty: "M" },
    { name: "BST iterator",                                     difficulty: "M" },
    { name: "Two sum in BST",                                   difficulty: "M" },
  ],
  41: [
    { name: "Correct BST with two nodes swapped",               difficulty: "H" },
    { name: "Largest BST in Binary Tree",                       difficulty: "H" },
  ],

  // ── Heaps ── (Days 42–44, 10 questions)

  42: [
    { name: "Heaps (Theory Video)" },
    { name: "Heapify Algorithm",                                difficulty: "M" },
    { name: "Build heap from a given Array",                    difficulty: "M" },
    { name: "Implement Min Heap",                               difficulty: "M" },
  ],
  43: [
    { name: "Implement Max Heap",                               difficulty: "M" },
    { name: "Check if an array represents a min heap",          difficulty: "E" },
    { name: "Convert Min Heap to Max Heap",                     difficulty: "M" },
  ],
  44: [
    { name: "Heap Sort",                                        difficulty: "M" },
    { name: "K-th Largest element in an array",                 difficulty: "M" },
    { name: "Kth largest element in a stream of running integers", difficulty: "M" },
  ],

  // ── Graphs ── (Days 45–59, 44 questions)

  45: [
    { name: "Introduction to Graph" },
    { name: "Traversal Techniques (BFS / DFS)" },
    { name: "Connected Components" },
  ],
  46: [
    { name: "Number of provinces",                              difficulty: "M" },
    { name: "Number of islands",                                difficulty: "M" },
    { name: "Flood fill algorithm",                             difficulty: "E" },
  ],
  47: [
    { name: "Number of enclaves",                               difficulty: "M" },
    { name: "Rotten Oranges",                                   difficulty: "M" },
    { name: "Distance of nearest cell having one",              difficulty: "M" },
  ],
  48: [
    { name: "Surrounded Regions",                               difficulty: "M" },
    { name: "Number of distinct islands",                       difficulty: "M" },
    { name: "Detect a cycle in an undirected graph",            difficulty: "M" },
  ],
  49: [
    { name: "Bipartite graph",                                  difficulty: "M" },
    { name: "Topological sort or Kahn's algorithm",             difficulty: "M" },
    { name: "Detect a cycle in a directed graph",               difficulty: "M" },
  ],
  50: [
    { name: "Find eventual safe states",                        difficulty: "M" },
    { name: "Course Schedule I",                                difficulty: "M" },
    { name: "Course Schedule II",                               difficulty: "M" },
  ],
  51: [
    { name: "Alien Dictionary",                                 difficulty: "H" },
    { name: "Shortest path in DAG",                             difficulty: "M" },
    { name: "Shortest path in undirected graph with unit weights", difficulty: "M" },
  ],
  52: [
    { name: "Word ladder I",                                    difficulty: "H" },
    { name: "Word ladder II",                                   difficulty: "H" },
    { name: "Dijkstra's algorithm",                             difficulty: "M" },
  ],
  53: [
    { name: "Print Shortest Path",                              difficulty: "M" },
    { name: "Shortest Distance in a Binary Maze",               difficulty: "M" },
    { name: "Path with minimum effort",                         difficulty: "M" },
  ],
  54: [
    { name: "Cheapest flight within K stops",                   difficulty: "M" },
    { name: "Minimum multiplications to reach end",             difficulty: "M" },
    { name: "Number of ways to arrive at destination",          difficulty: "M" },
  ],
  55: [
    { name: "Bellman ford algorithm",                           difficulty: "M" },
    { name: "Floyd warshall algorithm",                         difficulty: "M" },
    { name: "Find the city with the smallest number of neighbors", difficulty: "M" },
  ],
  56: [
    { name: "MST theory" },
    { name: "Disjoint Set",                                     difficulty: "M" },
    { name: "Find the MST weight",                              difficulty: "M" },
  ],
  57: [
    { name: "Number of operations to make network connected",   difficulty: "M" },
    { name: "Accounts merge",                                   difficulty: "H" },
    { name: "Number of islands II",                             difficulty: "H" },
  ],
  58: [
    { name: "Making a large island",                            difficulty: "H" },
    { name: "Most stones removed with same row or column",      difficulty: "M" },
    { name: "Kosaraju's algorithm",                             difficulty: "H" },
  ],
  59: [
    { name: "Bridges in graph",                                 difficulty: "H" },
    { name: "Articulation point in graph",                      difficulty: "H" },
  ],

  // ── Dynamic Programming ── (Days 60–75, 47 questions)

  60: [
    { name: "Introduction to DP" },
    { name: "Climbing stairs",                                  difficulty: "E" },
    { name: "Frog Jump",                                        difficulty: "M" },
  ],
  61: [
    { name: "Frog jump with K distances",                       difficulty: "M" },
    { name: "Maximum sum of non adjacent elements",             difficulty: "M" },
    { name: "House robber",                                     difficulty: "M" },
  ],
  62: [
    { name: "Ninja's training",                                 difficulty: "M" },
    { name: "Grid unique paths",                                difficulty: "M" },
    { name: "Unique paths II",                                  difficulty: "M" },
  ],
  63: [
    { name: "Minimum Falling Path Sum",                         difficulty: "M" },
    { name: "Triangle",                                         difficulty: "M" },
    { name: "Cherry pickup II",                                 difficulty: "H" },
  ],
  64: [
    { name: "Best time to buy and sell stock",                  difficulty: "E" },
    { name: "Best time to buy and sell stock II",               difficulty: "M" },
    { name: "Best time to buy and sell stock III",              difficulty: "H" },
  ],
  65: [
    { name: "Best time to buy and sell stock IV",               difficulty: "H" },
    { name: "Best time to buy and sell stock with transaction fees", difficulty: "M" },
    { name: "Subset sum equals to target",                      difficulty: "M" },
  ],
  66: [
    { name: "Partition equal subset sum",                                                   difficulty: "M" },
    { name: "Partition a set into two subsets with minimum absolute sum difference",        difficulty: "M" },
    { name: "Count subsets with sum K",                                                     difficulty: "M" },
  ],
  67: [
    { name: "Count partitions with given difference",           difficulty: "M" },
    { name: "0 and 1 Knapsack",                                 difficulty: "M" },
    { name: "Minimum coins",                                    difficulty: "M" },
  ],
  68: [
    { name: "Target sum",                                       difficulty: "M" },
    { name: "Coin change II",                                   difficulty: "M" },
    { name: "Unbounded knapsack",                               difficulty: "M" },
    { name: "Rod cutting problem",                              difficulty: "M" },
  ],
  69: [
    { name: "Longest Increasing Subsequence",                   difficulty: "M" },
    { name: "Print Longest Increasing Subsequence",             difficulty: "M" },
    { name: "Largest Divisible Subset",                         difficulty: "M" },
  ],
  70: [
    { name: "Longest String Chain",                             difficulty: "M" },
    { name: "Longest Bitonic Subsequence",                      difficulty: "M" },
    { name: "Number of Longest Increasing Subsequences",        difficulty: "M" },
  ],
  71: [
    { name: "Longest common subsequence",                       difficulty: "M" },
    { name: "Longest common substring",                         difficulty: "M" },
    { name: "Longest palindromic subsequence",                  difficulty: "M" },
  ],
  72: [
    { name: "Minimum insertions to make string palindrome",                     difficulty: "M" },
    { name: "Minimum insertions or deletions to convert string A to B",         difficulty: "M" },
    { name: "Shortest common supersequence",                                    difficulty: "M" },
  ],
  73: [
    { name: "Distinct subsequences",                            difficulty: "H" },
    { name: "Edit distance",                                    difficulty: "H" },
    { name: "Wildcard matching",                                difficulty: "H" },
  ],
  74: [
    { name: "Matrix chain multiplication",                      difficulty: "H" },
    { name: "Minimum cost to cut the stick",                    difficulty: "H" },
    { name: "Burst balloons",                                   difficulty: "H" },
    { name: "Palindrome partitioning II",                       difficulty: "H" },
  ],

  // ── Tries ── (Days 75–76, 6 questions)

  75: [
    { name: "Trie Implementation and Operations",               difficulty: "M" },
    { name: "Trie Implementation and Advanced Operations",      difficulty: "M" },
    { name: "Longest Word with All Prefixes",                   difficulty: "M" },
  ],
  76: [
    { name: "Number of distinct substrings in a string",        difficulty: "M" },
    { name: "Maximum XOR of two numbers in an array",           difficulty: "M" },
    { name: "Maximum Xor with an element from an array",        difficulty: "H" },
  ],

  // ── Strings (Advanced) ── (Days 77–79, 8 questions)

  77: [
    { name: "Reverse every word in a string",                                       difficulty: "E" },
    { name: "Minimum number of bracket reversals to make an expression balanced",   difficulty: "M" },
    { name: "Count and say",                                                        difficulty: "M" },
  ],
  78: [
    { name: "Rabin Karp Algorithm",                             difficulty: "M" },
    { name: "Z function",                                       difficulty: "M" },
    { name: "KMP Algorithm or LPS array",                       difficulty: "M" },
  ],
  79: [
    { name: "Shortest Palindrome",                              difficulty: "H" },
    { name: "Longest happy prefix",                             difficulty: "H" },
  ],

  // ── Maths ── (Days 80–81, 4 questions)

  80: [
    { name: "Sieve of Eratosthenes",                            difficulty: "M" },
    { name: "Print all primes till N",                          difficulty: "M" },
  ],
  81: [
    { name: "Prime factorisation of a Number",                  difficulty: "M" },
    { name: "Count primes in range L to R",                     difficulty: "M" },
  ],

  // Days 82–89: Interview Mode — no new questions, focus on revision & mocks
};

export default DAY_QUESTIONS;
