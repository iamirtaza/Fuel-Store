const crypt = require("../helpers/crypt");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../helpers/db");
const { ROLES } = require("../constants/contants");
const {
  getFailureResponse,
  getSuccessResponse
} = require("../helpers/response");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

module.exports.login = async (req, res, next) => {
  let uname = req.params.username;
  let pass = req.params.password;
  try {
    let data = await db.executeQuery(
      "Select *from users where username=? and password=?",
      [uname, pass]
    );
    if(data.length>0){
      res.status(200).send(getSuccessResponse(data));
    }
    else{
      res.status(200).send(getFailureResponse("Failed"));
    }
    
  } catch (ex) {
    console.log(ex);
    res.status(200).send(getFailureResponse("Failed"));
  }
};

module.exports.authenticate = function authenticate(req, res, next) {
  try {
    let { username, password } = req.body;
    db.executeQuery(
      `SELECT u.user_id,u.username,u.password,u.role_id,up.first_name,up.last_name,up.email FROM users u left 
    join user_profile up on u.user_id=up.user_id WHERE u.username = ? and u.active=?`,
      [username, true]
    )
      .then(rows => {
        if (rows.length > 0) {
          crypt
            .verifyHash(password, rows[0].password)
            .then(status => {
              if (status) {
                const payload = {
                  id: rows[0].user_id,
                  firstName: rows[0].first_name,
                  lastName: rows[0].last_name,
                  username: rows[0].username,
                  address: rows[0].distributor_address,
                  role_id: rows[0].role_id
                };
                // Sign token
                jwt.sign(
                  payload,
                  config.jwt_secret,
                  {
                    expiresIn: 86400 // 1 day in seconds
                  },
                  (err, token) => {
                    logLastLogin(rows[0].user_id);
                    res.json({
                      isSuccess: true,
                      token
                    });
                  }
                );
              } else {
                res
                  .status(200)
                  .json(getFailureResponse("Invalid username or password."));
              }
            })
            .catch(err => {
              res
                .status(200)
                .json(getFailureResponse("Invalid username or password"));
            });
        } else {
          res
            .status(200)
            .json(getFailureResponse("Invalid username or password "));
        }
      })
      .catch(err => {
        console.log("Error in UserController at authenticate function :");
        console.log(err);
        res.status(200).json(getFailureResponse("Network Error"));
      });
  } catch (ex) {
    console.log("Error in UserController at authenticate function :" + ex);
    res.status(200).json(getFailureResponse());
  }
};

module.exports.register = function register(req, res, next) {
  console.log("Request body", req.body);
  try {
    let {
      name,
      phone,
      email,
      bio,
      photo,
      talent_type,
      vetted,
      tier,
      talent_id,
      persona,
      alerts,
      badges,
      categories,
      notes,
      tags,
      fuel_profile,
      fuel_store,
      instagram,
      youtube,
      twitter,
      facebook,
      linkedin,
      twitch,
      behance,
      other,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6
    } = req.body[0];

    db.executeQuery(
      ` INSERT INTO talent (name,phone,bio,photo,talent_type,vetted,
                      tier,talent_id,persona) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, phone, bio, photo, talent_type, vetted, tier, talent_id, persona]
    )
      .then(talent => {
        for (let i = 0; i < email.length; i++) {
          db.executeQuery(
            ` INSERT INTO email (talent_id,email) 
                          VALUES (?, ?)`,
            [talent.insertId, email[i]]
          )
            .then(result => {
              if (i + 1 == email.length) {
                for (let j = 0; j < alerts.length; j++) {
                  db.executeQuery(
                    ` INSERT INTO alerts (talent_id,alert_name, date) 
                                VALUES (?, ?, ?)`,
                    [talent.insertId, alerts[j]['alert_name'], alerts[j]['date']]
                  )
                    .then(result => {
                      if (j + 1 == alerts.length) {
                        console.log(alerts.length);
                        for (let k = 0; k < badges.length; k++) {
                          db.executeQuery(
                            ` INSERT INTO badges (talent_id,badge_id) 
                                      VALUES (?, ?)`,
                            [talent.insertId, badges[k]]
                          )
                            .then(result => {
                              if (k + 1 == badges.length) {
                                console.log(categories.length);
                                for (let l = 0; l < categories.length; l++) {
                                  db.executeQuery(
                                    ` INSERT INTO categories (talent_id,category_name) 
                                            VALUES (?, ?)`,
                                    [talent.insertId, categories[l]]
                                  )
                                    .then(result => {
                                      if (l + 1 == categories.length) {
                                        console.log(notes.length);
                                        for (let m = 0; m < notes.length; m++) {
                                          db.executeQuery(
                                            ` INSERT INTO notes (talent_id,note) 
                                                  VALUES (?, ?)`,
                                            [talent.insertId, notes[m]]
                                          )
                                            .then(result => {
                                              if (m + 1 == notes.length) {
                                                console.log(tags.length);
                                                for (
                                                  let n = 0;
                                                  n < tags.length;
                                                  n++
                                                ) {
                                                  db.executeQuery(
                                                    ` INSERT INTO tags (talent_id,tag_name) 
                                                        VALUES (?, ?)`,
                                                    [talent.insertId, tags[n]]
                                                  )
                                                    .then(result => {
                                                      if (
                                                        n + 1 ==
                                                        tags.length
                                                      ) {
                                                        db.executeQuery(
                                                          ` INSERT INTO social_profile (talent_id,fuel_profile, fuel_store, instagram, youtube, twitter, facebook, linkedin, twitch, behance, other) 
                                                              VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
                                                          [
                                                            talent.insertId,
                                                            fuel_profile,
                                                            fuel_store,
                                                            instagram,
                                                            youtube,
                                                            twitter,
                                                            facebook,
                                                            linkedin,
                                                            twitch,
                                                            behance,
                                                            other
                                                          ]
                                                        )
                                                          .then(result => {
                                                            db.executeQuery(
                                                              ` INSERT INTO work (talent_id, photo1, photo2, photo3, photo4, photo5, photo6) 
                                                                VALUES (?,?,?,?,?,?,?)`,
                                                              [
                                                                talent.insertId,
                                                                photo1,
                                                                photo2,
                                                                photo3,
                                                                photo4,
                                                                photo5,
                                                                photo6
                                                              ]
                                                            )
                                                              .then(
                                                                result => {}
                                                              )
                                                              .catch(err => {
                                                                console.log(
                                                                  err
                                                                );
                                                              });
                                                          })
                                                          .catch(err => {
                                                            console.log(err);
                                                          });
                                                      }
                                                    })
                                                    .catch(err => {
                                                      console.log(err);
                                                    });
                                                }
                                              }
                                            })
                                            .catch(err => {
                                              console.log(err);
                                            });
                                        }
                                      }
                                    })
                                    .catch(err => {
                                      console.log(err);
                                    });
                                }
                              }
                            })
                            .catch(err => {
                              console.log(err);
                            });
                        }
                      }
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }
              }
            })
            .catch(err => {});
        }

        console.log("Inserted", talent);
        // res.status(200).json(getSuccessResponse());
      })
      .catch(err => {
        console.log(err);
        res.status(200).json(getFailureResponse());
      });
    res.status(200).json(getSuccessResponse());
  } catch (ex) {
    console.log(ex);
    res.status(200).json(getFailureResponse());
  }
};

module.exports.getAllTalents = function(req, res, next) {
  let users = [];
  try {
    db.executeQuery(`Select * from talent`)
      .then(rows => {
        for (let i = 0; i < rows.length; i++) {
          db.executeQuery(
            "Select category_name from categories where talent_id=?",
            [rows[i]["id"]]
          )
            .then(async categories => {
              let c = [];
              if (categories.length > 0) {
                for (let j = 0; j < categories.length; j++) {
                  c.push(categories[j]["category_name"]);
                  rows[i]["category"] = c;
                }
              }
              await db
                .executeQuery(
                  "Select * from social_profile where talent_id=?",
                  [rows[i]["id"]]
                )
                .then(social => {
                  rows[i]["fuel_profile"] = social[0].fuel_profile;
                  rows[i]["fuel_store"] = social[0].fuel_store;
                  rows[i]["instagram"] = social[0].instagram;
                  rows[i]["youtube"] = social[0].youtube;
                  rows[i]["twitter"] = social[0].twitter;
                  rows[i]["facebook"] = social[0].facebook;
                  rows[i]["linkedin"] = social[0].linkedin;
                  rows[i]["twitch"] = social[0].twitch;
                  rows[i]["behance"] = social[0].behance;
                  rows[i]["other"] = social[0].other;
                })
                .catch(err => {
                  console.log(err);
                });
              await db
                .executeQuery("Select * from work where talent_id=?", [
                  rows[i]["id"]
                ])
                .then(work => {
                  rows[i]["photo1"] = work[0].photo1;
                  rows[i]["photo2"] = work[0].photo2;
                  rows[i]["photo3"] = work[0].photo3;
                  rows[i]["photo4"] = work[0].photo4;
                  rows[i]["photo5"] = work[0].photo5;
                  rows[i]["photo6"] = work[0].photo6;
                })
                .catch(err => {
                  console.log(err);
                });
              if (i + 1 == rows.length) {
                console.log(rows);
                return res.status(200).json(getSuccessResponse(rows));
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
        return res.status(200).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(getFailureResponse());
  }
};

module.exports.getAreaManagers = function(req, res, next) {
  try {
    db.executeQuery(
      `Select u.* ,r.role_name,up.*, d.department_name from users u 
      join roles r on u.role_id=r.role_id
      left join user_profile up on u.user_id=up.user_id
      left join departments d on up.department_id=d.department_id where r.role_id=? and u.active = ?`,
      [ROLES.AREA_MANAGER, true]
    )
      .then(rows => {
        return res.status(200).json(getSuccessResponse(rows));
      })
      .catch(err => {
        console.log(err);
        return res.status(200).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(getFailureResponse());
  }
};

module.exports.validateUserName = function register(req, res, next) {
  try {
    db.executeQuery("Select username from users where username=?", [
      req.params.username
    ])
      .then(rows => {
        if (rows.length > 0) {
          res.status(200).json(getSuccessResponse({ isValid: false }));
        } else {
          res.status(200).json(getSuccessResponse({ isValid: true }));
        }
      })
      .catch(err => {
        console.log(err);
        res.status(200).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(200).json(getFailureResponse());
  }
};

module.exports.getTalentById = function(req, res, next) {
  console.log("ss", req.params.id);
  let emails = [];
  let badges = [];
  let categories = [];
  let tags = [];
  let alerts = [];
  let alert_date = [];
  try {
    db.executeQuery(`Select * from talent where id = ?`, [req.params.id])
      .then(rows => {
        db.executeQuery(
          "Select email from email where talent_id=?",
          req.params.id
        )
          .then(email => {
            for (let i = 0; i < email.length; i++) {
              emails.push(email[i].email);
            }
            rows[0]["email"] = emails;
            db.executeQuery("Select badge_id from badges where talent_id=?", [
              req.params.id
            ])
              .then(badge => {
                for (let i = 0; i < badge.length; i++) {
                  badges.push(badge[i].badge_id);
                }
                rows[0]["badges"] = badges;
                db.executeQuery(
                  "Select category_name from categories where talent_id=?",
                  [req.params.id]
                )
                  .then(category => {
                    for (let i = 0; i < category.length; i++) {
                      categories.push(category[i].category_name);
                    }
                    rows[0]["categories"] = categories;
                    db.executeQuery(
                      "Select tag_name from tags where talent_id=?",
                      [req.params.id]
                    )
                      .then(tag => {
                        for (let i = 0; i < tag.length; i++) {
                          tags.push(tag[i].tag_name);
                        }
                        rows[0]["tags"] = tags;
                        db.executeQuery(
                          "Select * from social_profile where talent_id=?",
                          [req.params.id]
                        )
                          .then(social => {
                            rows[0]["fuel_profile"] = social[0].fuel_profile;
                            rows[0]["fuel_store"] = social[0].fuel_store;
                            rows[0]["instagram"] = social[0].instagram;
                            rows[0]["youtube"] = social[0].youtube;
                            rows[0]["twitter"] = social[0].twitter;
                            rows[0]["facebook"] = social[0].facebook;
                            rows[0]["linkedin"] = social[0].linkedin;
                            rows[0]["twitch"] = social[0].twitch;
                            rows[0]["behance"] = social[0].behance;
                            rows[0]["other"] = social[0].other;
                            db.executeQuery(
                              "Select * from alerts where talent_id=?",
                              [req.params.id]
                            )
                              .then(alert => {
                                console.log(alert)
                                for (let i = 0; i < alert.length; i++) {
                                  alerts.push(alert[i].alert_name);
                                  alert_date.push(alert[i].date)
                                }
                                rows[0]["alert_name"] = alerts;
                                rows[0]["alert_date"] = alert_date;
                                db.executeQuery(
                                  "Select * from work where talent_id=?",
                                  [req.params.id]
                                )
                                  .then(work => {
                                    rows[0]["photo1"] = work[0].photo1;
                                    rows[0]["photo2"] = work[0].photo2;
                                    rows[0]["photo3"] = work[0].photo3;
                                    rows[0]["photo4"] = work[0].photo4;
                                    rows[0]["photo5"] = work[0].photo5;
                                    rows[0]["photo6"] = work[0].photo6;
                                    console.log(rows);
                                    res
                                      .status(200)
                                      .json(getSuccessResponse(rows));
                                  })
                                  .catch(err => {
                                    console.log(err);
                                  });
                              })
                              .catch(err => {
                                console.log(err);
                              });
                          })
                          .catch(err => {
                            console.log(err);
                          });
                      })
                      .catch(err => {
                        console.log(err);
                      });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(500).json(getFailureResponse());
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    let {
      username,
      user_password,
      email,
      first_name,
      last_name,
      address,
      bank_acc_no,
      date_of_birth,
      department_id,
      designation,
      eobi_no,
      father_name,
      gender,
      joining_date,
      marital_status,
      mobile,
      nic_no,
      cader,
      empl_no,
      user_id,
      role_id
    } = req.body;

    let isExist = await db.executeQuery(
      "Select * From users WHERE username=? and active = ?",
      [username, true]
    );
    if (isExist.length > 0) {
      db.executeQuery(
        ` Update user_profile set first_name=?,last_name=?,address=?,bank_acc_no=?,cader=?,date_of_birth=?,
          department_id=?,designation=?,empl_no=?,eobi_no=?,father_name=?,gender=?,joining_date=?,marital_status=?,
          mobile=?,nic_no=?,email=? where user_id=?`,
        [
          first_name,
          last_name,
          address,
          bank_acc_no,
          cader,
          new Date(date_of_birth),
          department_id,
          designation,
          empl_no,
          eobi_no,
          father_name,
          gender,
          new Date(joining_date),
          marital_status,
          mobile,
          nic_no,
          email,
          user_id
        ]
      )
        .then(rows => {
          db.executeQuery(
            `Update users set role_id=? where username=? and user_id=?`,
            [role_id, username, user_id]
          )
            .then(rows => {
              if (user_password != "00000000") {
                bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(user_password, salt, (err, hash) => {
                    if (err) throw err;
                    db.executeQuery(
                      `Update users set password=? where username=? and user_id=?`,
                      [hash, username, user_id]
                    )
                      .then(rows => {
                        res.status(200).json(getSuccessResponse());
                      })
                      .catch(err => {
                        console.log(err);
                        res.status(200).json(getFailureResponse());
                      });
                  });
                });
              } else res.status(200).json(getSuccessResponse());
            })
            .catch(err => {
              console.log(err);
              res.status(200).json(getFailureResponse());
            });
        })
        .catch(err => {
          console.log(err);
          res.status(200).json(getFailureResponse());
        });
    } else {
      console.log(err);
      return res.status(200).json(getFailureResponse("No record found."));
    }
  } catch (ex) {
    console.log(ex);
    return res.status(200).json(getFailureResponse());
  }
};

module.exports.updatePassword = async (req, res, next) => {
  try {
    let { username, user_id, old_password, new_password } = req.body;

    let existingUser = await db.executeQuery(
      "Select * From users WHERE user_id=? and active = ?",
      [user_id, true]
    );
    if (existingUser.length > 0) {
      crypt
        .verifyHash(old_password, existingUser[0].password)
        .then(status => {
          if (status) {
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(new_password, salt, (err, hash) => {
                if (err) throw err;
                db.executeQuery(
                  `Update users set password=? where username=? and user_id=?`,
                  [hash, username, user_id]
                )
                  .then(rows => {
                    res.status(200).json(getSuccessResponse());
                  })
                  .catch(err => {
                    console.log(err);
                    res.status(200).json(getFailureResponse());
                  });
              });
            });
          } else {
            res
              .status(200)
              .json(getFailureResponse("Old password is not correct."));
          }
        })
        .catch(err => {
          res.status(200).json(getFailureResponse("User not found."));
        });
    } else {
      return res.status(200).json(getFailureResponse("No record found."));
    }
  } catch (ex) {
    console.log(ex);
    return res.status(200).json(getFailureResponse());
  }
};

module.exports.deActivateUser = function(req, res, next) {
  try {
    console.log(req.params.id);
    db.executeQuery("Update users set active=? where user_id=?", [
      false,
      req.params.id
    ])
      .then(rows => {
        return res.status(200).json(getSuccessResponse());
      })
      .catch(err => {
        console.log(err);
        return res.status(200).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(getFailureResponse());
  }
};

module.exports.getAllRoles = function(req, res, next) {
  try {
    db.executeQuery(`Select *from roles where active = ? and role_id != 0`, [
      true
    ])
      .then(rows => {
        return res.status(200).json(getSuccessResponse(rows));
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(500).json(getFailureResponse());
  }
};

module.exports.getUserRegions = function(req, res, next) {
  try {
    db.executeQuery(
      `Select u.user_id,u.username,ur.region_id,r.region_name,ur.user_region_id from 
                    users u join user_regions ur on u.user_id=ur.user_id
                    join regions r on ur.region_id=r.region_id
                    where u.active = ?`,
      [true]
    )
      .then(rows => {
        return res.status(200).json(getSuccessResponse(rows));
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(500).json(getFailureResponse());
  }
};

module.exports.addUserRegion = function(req, res, nex) {
  try {
    let query = `Insert into user_regions (user_id,region_id) values(?,?)`;
    let { user_id, region_id } = req.body;

    db.executeQuery(`Select *from user_regions where user_id=?`, [user_id])
      .then(rows => {
        if (!(rows.length > 0)) {
          db.executeQuery(query, [user_id, region_id])
            .then(rows => {
              res.status(200).json(getSuccessResponse());
            })
            .catch(err => {
              res.status(200).json(getFailureResponse());
            });
        } else {
          console.log("Region is already associated with this user.");
          res
            .status(200)
            .json(
              getFailureResponse("Region is already associated with this user.")
            );
        }
      })
      .catch(err => {
        console.log(err);
        res.status(200).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(200).json(getFailureResponse("Something went wrong."));
  }
};

module.exports.updateUserRegion = function(req, res, nex) {
  try {
    let updateQuery = `Update user_regions set user_id=?,region_id=? where user_region_id=?`;
    let { user_id, region_id, user_region_id } = req.body;

    db.executeQuery(`Select *from user_regions where user_region_id=?`, [
      user_region_id
    ])
      .then(rows => {
        if (rows.length > 0) {
          db.executeQuery(updateQuery, [user_id, region_id, user_region_id])
            .then(rows => {
              res.status(200).json(getSuccessResponse());
            })
            .catch(err => {
              console.log(err);
              res.status(200).json(getFailureResponse());
            });
        } else {
          console.log("Record not found.");
          res.status(200).json(getFailureResponse("Record not found."));
        }
      })
      .catch(err => {
        console.log(err);
        res.status(200).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(200).json(getFailureResponse("Something went wrong."));
  }
};

module.exports.deleteUserRegion = function(req, res, next) {
  try {
    db.executeQuery("delete from user_regions where user_region_id=?", [
      req.params.id
    ])
      .then(rows => {
        return res.status(200).json(getSuccessResponse());
      })
      .catch(err => {
        console.log(err);
        return res.status(200).json(getFailureResponse());
      });
  } catch (ex) {
    console.log(ex);
    res.status(400).json(getFailureResponse());
  }
};

function logLastLogin(user_id) {
  db.executeQuery("UPDATE users set user_last_login=? where user_id=?", [
    new Date(),
    user_id
  ])
    .then(row => {})
    .catch(err => {
      console.log(err);
    });
}
