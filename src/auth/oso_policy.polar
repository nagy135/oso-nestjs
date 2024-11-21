actor User {}

resource Organization {
  roles = ["viewer", "owner"];
}

resource Project {
  roles = ["viewer", "owner"];
  permissions = ["view", "edit"];
  relations = { project_container: Organization };
  "view" if "viewer";
  "edit" if "owner";
  "viewer" if "owner";
  "viewer" if "viewer" on "project_container";
  "owner" if "owner" on "project_container";
}

resource UnusedResource {
  roles = ["viewer", "owner"];
}
