// The Painfully Honest Out-of-Office — make.fun bounty
// u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
//
// One sentence, painfully honest and still polite: it admits the sender
// had already checked out before leaving, while promising the message
// will get real attention on return — warm enough that no manager
// would object to it.

import * as fs from "node:fs";

// The quotable turn: "checked out days before I left" — the private
// truth, said out loud, then softened by "safe in the pile" and the
// promise of "fresh eyes and real attention".
const reply =
  "I'm out of office, and honestly I had already checked out days before I left — your message is safe in the pile, and I'll answer it with fresh eyes and real attention when I'm back.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", reply, "utf8");
